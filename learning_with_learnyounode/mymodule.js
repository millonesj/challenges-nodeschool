var fs = require('fs');
function filterDirectory(directory, extension, callback) {
    fs.readdir(directory, {withFileTypes: true}, (err, list) => {
        if (err) return callback(err);
        var filteredFiles = [];
        list.forEach(file => {
            var splited = file.name.split('.');
            if ( splited[splited.length - 1] == extension
                 && splited.length > 1
                 && file.isFile())
               filteredFiles.push(file.name);
        });
        return callback(null, filteredFiles);
    });
}
module.exports = filterDirectory;
