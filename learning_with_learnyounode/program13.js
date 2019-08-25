const http = require('http');
const port = process.argv[2];
const url = require('url');
const server = http.createServer((req, res) => {
    let urlRequest = url.parse(req.url, true);
    if (urlRequest.pathname === '/api/parsetime') {
        let time = urlRequest.query.iso.split('T')[1].split(':');
        let hour = time[0];
        let minute = time[1];
        let second = time[2].split('.')[0];
        res.end(JSON.stringify({hour, minute, second}));
        console.log(urlRequest.query.iso);
    }
    console.log('hello');
});

server.listen(port);
