var http = require('http');
var dt = require('../src/modules');

var url = require('url');

var port = 8080;

// req to jest request
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;

  res.end(txt);
})

server.listen(port, () => {console.log('Listening on 127.0.0.1:' + port)});
