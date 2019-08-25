var http = require('http');
var url = process.argv[2];
var fullData = "";
http.get(url, response => {
    response.setEncoding('utf8');
    response.on('data', data => {
        fullData += data;
    })
    .on('end', data => {
        console.log(fullData.length);
        console.log(fullData);
    })
    .on('error', error => console.error(error)); 
});
