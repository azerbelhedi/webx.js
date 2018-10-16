var file = require('./../scratch/filesio.js');
function testName(appName){
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
        file.fcreate('./'+appName+'/.stack') ;
        
        file.fcreate('./'+appName+'/index.html');
        file.fcreate('./'+appName+'/index.css');
        file.fcreate('./'+appName+'/index.js');

        file.fcreate('./'+appName+'/index.webx.html');
        file.fcreate('./'+appName+'/index.webx.css');
        file.fcreate('./'+appName+'/index.webx.js');

        file.fcreate('./'+appName+'/components/'+'webx.html');
        file.fcreate('./'+appName+'/components/'+'webx.css');
        file.fcreate('./'+appName+'/components/'+'webx.js');    

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
