var command = require('./modules/commands/commands.js') ;
const readline = require('readline') ;

console.log("----------webx.js----------");
/*
command.createApp("cybertrace");
command.createComponent("topbar");
command.buildApp();
command.runApp();
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'webx> '
});

rl.prompt();

rl.on('line', (line) => {
    var input = line.trim() ;
    // input = decomposer.deleteSpace(input) ;
    if(input == "create-app"){
        command.createApp("test app") ;
    }
    else if (input == "create-component"){
        command.createComponent("test component");
    }
    else if(input == "build-app"){
        command.buildApp('build app');
    }
    else if(input == "run-app"){
        command.runApp('run app');
    }
    else if(input == "help"){
        console.log("help");
    }
    //else if() ...
    rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
