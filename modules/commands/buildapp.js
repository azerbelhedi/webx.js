var file = require('../scratch/filesio.js') ;
var decomposers = require('../decomposers/decomposers.js') ;

function buildApp(appName){
    console.log("building app ..." + appName);
    var htmlCode = file.fread("./"+appName+'/index.webx.html'); 
    var cssCode = file.fread("./"+appName+'/index.webx.css');
    var rendredComponents = "";
    console.log(htmlCode);
    console.log(".................");

    var component = file.fread("./"+appName+"/stack.json");
    component = JSON.parse(component) ;
    var position ;
    component = component.list ;
    var thereIs = true ;
    var iteration = 0;
    while(thereIs){
        var thereIs = false ;
        iteration++ ;
        if(iteration == 50){
            console.log("infinit loop");
            break;
        }
        for(var i = 1 ; i < (component.length); i++){
            if(rendredComponents.search(component[i].toUpperCase()) == -1){
                rendredComponents += ("/" + component[i].toUpperCase() );
                cssCode += '\n';
                cssCode += file.fread("./"+appName+"/components/"+component[i].toLowerCase()+".css");
            }
            component[i] = component[i].toUpperCase(); 
            var componentCode = file.fread('./'+appName+'/components/'+component[i].toLowerCase()+'.html');
            position = htmlCode.search("<"+component[i].toUpperCase()) ;
            if(position != -1){
                var header = "";
                var start = position+component[i].length+1;
                while(htmlCode[start] != ">"){
                    header+=htmlCode[start];
                    start++;
                }
                console.log("identifier : "+header);
            }
            
            //console.log(position);
            var mara = 0;
            while(position != -1){   
                thereIs = true ;
                //console.log(".."+component[i]);
                htmlCode = htmlCode.replace("<"+component[i].toUpperCase()+header,
                "<div " + header + ">" + 
                    componentCode +
                "</div");
                position = -1 ;
                position = htmlCode.search("<"+component[i].toUpperCase()+header) ;
                console.log("mara : "+position) ; mara++;
                console.log("<"+component[i].toUpperCase()+"/"+header);
                //break;
            } 
        }
    }    
    //htmlCode = htmlCode.replace(/\s/g,''); 

    htmlCode = htmlCode.replace("/*thisswherethecsscodeshouldbehoujoukoulouma*/",cssCode);

    console.log(htmlCode);
    file.fdelete('./'+appName+'/index.html');
    file.fwrite('./'+appName+'/index.html',htmlCode);

    file.fdelete('./'+appName+'/index.css');
    file.fwrite('./'+appName+'/index.css',cssCode);
    

    console.log("your main page is : "+appName+"/index.html");
}

module.exports = {
    buildApp : function(appName){
        buildApp(appName);
    }
};