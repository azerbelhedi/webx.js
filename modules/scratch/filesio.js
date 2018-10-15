var fileCommand1 = require('./fcreate.js') ;
var fileCommand2 = require('./fread.js') ;
var fileCommand3 = require('./fwrite.js') ;
var fileCommand4 = require('./mkdir.js');
var fileCommand5 = require('./fdelete.js');

module.exports = {
    fcreate : function(fileName){
        fileCommand1.fcreate(fileName) ;
    } ,
    fread : function(fileName){
        return fileCommand2.fread(fileName) ;
    } ,
    fwrite : function(fileName , text ){
        fileCommand3.fwrite(fileName , text) ;
    } ,
    mkdir : function(filePath){
        fileCommand4.mkdir(filePath);
    } ,
    fdelete : function(fileName){
        fileCommand5.fdelete(fileName);
    }
};