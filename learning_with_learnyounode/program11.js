const http = require('http');
const fs = require('fs');
const port = process.argv[2]; 
const pathFile = process.argv[3];    
var server = http.createServer((req, res) => {
    const readable  = fs.createReadStream(pathFile);
    readable.on('data', (chunk) => {
        res.end(chunk.toString() );
    });
});

server.listen(port);
