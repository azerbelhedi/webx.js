var fs = require('fs');

function fcreate(fileName){
    fs.closeSync(fs.openSync(fileName, 'w'));
}


module.exports = {
    fcreate : function(fileName){
        fcreate(fileName) ;
    }
};
