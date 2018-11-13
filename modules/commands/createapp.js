var file = require('./../scratch/filesio.js');
function testName(appName){
    if(appName == ""){return false ;}
    // test it 
    // only a -> z 
    // no upper case
    return true ;
}

function createApp(appName){
    if(testName(appName)){
        console.log("creating app ... " + appName);
        file.mkdir('./'+appName);
        file.mkdir('./'+appName+'/components');
        file.fcreate('./'+appName+'/stack.json') ;
        
        file.fcreate('./'+appName+'/index.html');
        file.fcreate('./'+appName+'/index.css');
        file.fcreate('./'+appName+'/index.js');

        file.fcreate('./'+appName+'/index.webx.html');
        file.fcreate('./'+appName+'/index.webx.css');
        file.fcreate('./'+appName+'/index.webx.js');

        file.fcreate('./'+appName+'/components/'+'webx.html');
        file.fcreate('./'+appName+'/components/'+'webx.css');
        file.fcreate('./'+appName+'/components/'+'webx.js');  

        var indexWebxHtml = file.fread('./data/index.webx.html') 
        file.fwrite('./'+appName+'/index.webx.html',indexWebxHtml) ;
        //console.log(file.fread('./'+appName+'/index.webx.html')) ;

        var indexWebxCss = file.fread('./data/index.webx.css') ;
        file.fwrite('./'+appName+'/index.webx.css',indexWebxCss) ;
        //console.log(file.fread('./'+appName+'/index.webx.css')) ;
        
        var indexWebxJs = file.fread('./data/index.webx.js') ;
        file.fwrite('./'+appName+'/index.webx.js',indexWebxJs) ;
        //console.log(file.fread('./'+appName+'/index.webx.js')) ;
        
        //copy webx.html
        var webxHtml = file.fread('./data/webx.html');
        //console.log(webxHtml) ;
        file.fwrite('./'+appName+'/components/webx.html',webxHtml);

        //copy webx.css
        var webxCss = file.fread('./data/webx.css');
        //console.log(webxCss) ;
        file.fwrite('./'+appName+'/components/webx.css',webxCss);

        //copy webx.js
        var webxJs = file.fread('./data/webx.js');
        //console.log(webxJs) ;        
        file.fwrite('./'+appName+'/components/webx.js',webxJs);

        //add webx component to stack.json
        var components = {
            list : []
        };
        components.list.push({appName : appName});
        components.list.push("webx");
        var json = JSON.stringify(components);

        file.fwrite('./'+appName+'/stack.json',json) ;
        file.fwrite('./config.json',appName);

    }
    else {
        console.log("invalid app name ") ;
    }
}

module.exports = {
    createApp : function(appName){
        createApp(appName);
    }
};
