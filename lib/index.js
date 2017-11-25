import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Chittatosh\n');
}).listen(process.env.PORT || 8080);

console.log('Server running at localhost:8080');
