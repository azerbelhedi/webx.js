var fs = require('fs');

const mkdir =  (dirPath) => {
    try {
      fs.mkdirSync(dirPath)
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
    }
}

module.exports = {
    mkdir : function(dirPath){
        mkdir(dirPath);
    }
};

//mkdir("./azer");