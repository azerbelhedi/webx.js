var command = require('./modules/commands/commands.js') ;

console.log("----------webx.js----------");
command.createApp("cybertrace");
command.createComponent("topbar");
command.buildApp();
command.runApp();