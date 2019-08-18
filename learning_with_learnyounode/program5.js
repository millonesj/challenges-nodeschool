var fs = require('fs');
var input = process.argv;
var pathDir = input[2];
var ext = input[3];
fs.readdir(pathDir, (err, list) => {
    if (err) throw err;
    var filterd = list.filter(file=> {
        var splited = file.split('.');
        return splited[splited.length -1] === ext;
    });
    filterd.map(value => {
        console.log(value);
    });
});
