function testName(componentName){
    //test it
    return true ;
}

function createComponent(componentName){
    if(testName(componentName)){
        console.log("creating component ... "+componentName);
    }
    else{
        console.log("invalid component name") ;
    }
}

module.exports = {
    createComponent : function(componentName){
        createComponent(componentName) ;
    }
};