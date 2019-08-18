var fs = require('fs');// for testing: node program3.js program1.js
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var array = str.split("\n");
console.log(array.length-1);// 2
