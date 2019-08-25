const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('Send me a POST\n');
  const transformer = map(chunk => `${chunk}`.toUpperCase());
  req.pipe(transformer).pipe(res);    
  // req | transformer | res
});

server.listen(port);
