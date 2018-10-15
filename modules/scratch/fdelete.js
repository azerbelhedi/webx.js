var fs = require('fs');

const fdelete =  (fileName) => {
    try {
        fs.unlinkSync(fileName);
        console.log('file successfully deleted');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    fdelete : function(fileName){
        fdelete(fileName) ;
    }
};
