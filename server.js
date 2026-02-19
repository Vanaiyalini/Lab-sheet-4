const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello SE3040 Web Server!</h1>');
  res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");
