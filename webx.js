var command = require('./modules/commands/commands.js') ;
var file = require('./modules/scratch/filesio.js') ;
var decomposers = require('./modules/decomposers/decomposers.js');

const readline = require('readline') ;
console.log("----------webx.js----------");
/*
command.createApp("cybertrace");
command.createComponent("topbar");
command.buildApp();
command.runApp();
*/
var appName = "undefined" ;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

rl.prompt();

rl.on('line', (line) => {
    var input = line.trim() ;
    input = decomposers.deleteSpace(input) ;
    if(input.substring(0 , 10) == "create-app"){
        appName = input.substring(10 , input.length);
        command.createApp(appName) ;
        //file.mkdir("./"+appName);
        //file.fcreate("./" + appName + ".config");
    }
    else if (input.substring(0,16) == "create-component"){
        var componentName = input.substring(16,input.length);
        command.createComponent(componentName , appName);
        //file.fdelete('./azer.config') ;
    }
    else if(input == "build-app"){
        command.buildApp(appName);
    }
    else if(input == "run-app"){
        command.runApp(appName);
    }
    else if(input.substring(0,8) == "load-app"){
        // try to load the app
        newAppName = command.loadapp(input.substring(8,input.length));
        if(newAppName != undefined){
            appName = newAppName ;
        }
        //console.log(appName);
    }
    else if(input == "help"){
        var help = file.fread('./data/help.txt');
        console.log(help);
    }
    //else if() ...
    rl.prompt();
}).on('close', () => {
  console.log('exit webxjs');
  process.exit(0);
});
