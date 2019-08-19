var fs = require('fs'); // node program5.js "./" "js"
var input = process.argv;
var pathDir = input[2];
var ext = input[3];
fs.readdir(pathDir, {withFileTypes: true}, (err, list) => {
    if (err) throw err;
    list.forEach(file => {
        var splited = file.name.split('.');
        if (splited[splited.length - 1] === ext
            && file.isFile()
            && splited.length > 1) 
            console.log(file.name);
    }); 
});
/*
program1.js
program2.js
program3.js
program4.js
program5.js*/
