// import all the commands
var command = require('./createapp.js');
var command2 = require('./createcomponent.js');
var command3 = require('./buildapp.js');
var command4 = require('./runapp.js');

module.exports = {
    createApp : function(appName){
        command.createApp(appName);
    } ,
    createComponent : function(componentName , appName){
        command2.createComponent(componentName , appName);
    } ,
    buildApp : function(){
        command3.buildApp() ;
    } ,
    runApp : function(){
        command4.runApp();
    }
};