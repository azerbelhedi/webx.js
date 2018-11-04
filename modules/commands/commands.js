// import all the commands
var command = require('./createapp.js');
var command2 = require('./createcomponent.js');
var command3 = require('./buildapp.js');
var command4 = require('./runapp.js');
var command5 = require('./loadapp.js');

module.exports = {
    createApp : function(appName){
        command.createApp(appName);
    } ,
    createComponent : function(componentName , appName){
        command2.createComponent(componentName , appName);
    } ,
    buildApp : function(appName){
        command3.buildApp(appName) ;
    } ,
    runApp : function(appName){
        command4.runApp(appName);
    } ,
    loadapp : function(appName){
        return command5.loadApp(appName);
    }
};