var fs = require('fs');

function fread(fileName){
    var readFile = fs.readFileSync(fileName, 'utf8');
    return readFile ;
}

module.exports = {
    fread : function(fileName){
        return fread(fileName);
    }
}