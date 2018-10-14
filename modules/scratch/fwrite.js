var fs = require('fs');

function fwrite(fileName , text){
    fs.appendFileSync(fileName , text );
}

module.exports = {
    fwrite : function(fileName , text){
        fwrite(fileName , text) ;
    }
};
