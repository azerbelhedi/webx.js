var file = require('../scratch/filesio') ;

function buildApp(appName){
    console.log("building app ..." + appName);
    var htmlCode = file.fread("./"+appName+'/index.webx.html');

    var component = file.fread("./"+appName+"/stack.json");
    component = JSON.parse(component) ;

    var position ;
    component = component.list ;
    for(var i = 1 ; i < component.length ; i++){
        component[i] = component[i].toUpperCase(); 
        var componentCode = file.fread('./'+appName+'/components/'+component[i].toLocaleLowerCase()+'.html');
        position = htmlCode.search("<"+component[i]+"/>") ;
        //console.log(position);
        while(position != -1){   
            //console.log(".."+component[i]);
            htmlCode = htmlCode.replace("<"+component[i]+"/>",componentCode);
            position = htmlCode.search("<"+component[i]+"/>") ;
        } 
    }
    //console.log(htmlCode);
    file.fdelete('./'+appName+'/index.html');
    file.fwrite('./'+appName+'/index.html',htmlCode);
    console.log("your main page is : "+appName+"/index.html");
}

module.exports = {
    buildApp : function(appName){
        buildApp(appName);
    }
};