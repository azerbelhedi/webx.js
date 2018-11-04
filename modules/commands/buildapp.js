var file = require('../scratch/filesio') ;

function buildApp(appName){
    console.log("building app ..." + appName);
    var htmlCode = file.fread("./"+appName+'/index.webx.html');
    htmlCode = htmlCode.split('\n');

    var component = file.fread("./"+appName+"/stack.json");
    component = JSON.parse(component) ;

    //console.log(htmlCode) ;
    
    var newHtmlCode = [] ;
    var j = 0;
    for(var i = 1 ; i < htmlCode.length ; i++){
        console.log(htmlCode[i]);
        //j = replace(htmlCode[i] , j );
    }
    console.log(component.list[1]);
}

module.exports = {
    buildApp : function(appName){
        buildApp(appName);
    }
};