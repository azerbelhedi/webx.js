
function testName(appName){
    // test it 
    // only a -> z 
    // no upper case
    return true ;
}

function createApp(appName){
    if(testName(appName)){
        console.log("creating app ... " + appName);
        // create index.html
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
