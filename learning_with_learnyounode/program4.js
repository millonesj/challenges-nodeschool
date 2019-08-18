var fs = require('fs');// run on terminal for testing: node program4.js "$PWD/program1.js" 
var pathFile = process.argv[2];
fs.readFile(pathFile, 'UTF-8', (err, data) => {
    if (err) throw err;
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);// 2
});
