var file = require('./../scratch/filesio.js');


function testName(componentName){
    //test it
    if(componentName == ""){return false;}
    return true ;
}

function createComponent(componentName , appName){
    if(appName !="undefined"){
        if(testName(componentName)){
            console.log("creating component ... "+componentName+appName);
            var pwd = "./"+appName ;
            json = file.fread(pwd+'/stack.json');
            var component = JSON.parse(json) ;
            component.list.push(componentName);

            json = JSON.stringify(component);
            // delete and recreate = erase

            file.fdelete(pwd+'/stack.json');
            file.fcreate(pwd+'/stack.json');

            file.fwrite(pwd+'/stack.json',json); 
            
            console.log(component);

            pwd += '/components';
            file.fcreate(pwd+'/'+componentName+'.html') ;
            file.fcreate(pwd+'/'+componentName+'.js') ;
            file.fcreate(pwd+'/'+componentName+'.css') ;

        }
        else{
            console.log("invalid component name") ;
        }
    }
    else{
        console.log("create app first") ;
    }
    
}

module.exports = {
    createComponent : function(componentName , appName){
        createComponent(componentName , appName) ;
    }
};