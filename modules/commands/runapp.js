var openUrl = require('../dependencies/openurl-master/openurl');
var http = require("http");
var file = require('../scratch/filesio.js');

function runApp(appName){
    var htmlCode = file.fread('./'+appName+"/index.html");
    if(htmlCode == ""){
        console.log("should build the app first ");    
        return 0;
    }
    //console.log(htmlCode);
    var server = http.createServer(function(request , response ){
    response.writeHead(200 , {
        'Content-Type': 'text/html'
    });
    response.write(htmlCode);
    // path app
    response.end();
});
    server.listen(8082);
    openUrl.open('http://localhost:8082/');
}


// error to open webpage
module.exports = {
    runApp : function(appName){
        runApp(appName);
    }
};