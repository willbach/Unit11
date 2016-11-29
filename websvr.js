var http = require('http');

function handleReq(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World, my name is Will Galebach');
  res.end();
}

var server = http.createServer(handleReq);

server.listen(8001, function() {
  console.log('Listening on port 8001')
})