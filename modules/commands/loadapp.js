var file = require('../scratch/filesio');

function loadApp(appName){
    try{
        file.fread('./'+appName  +'/index.webx.html' );
    }
    catch(err){
        console.log(err.name + " : can't load app "+ appName) ;
        return undefined;
    }
    console.log("loaded app :" + appName);
    return appName ;
}

module.exports = {
    loadApp : function(appName){
        return loadApp(appName);
    }
};