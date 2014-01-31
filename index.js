var http = require('http'),
  express = require('express'),
  webConfig = require('./web.config');

var app = express();

if(webConfig.webServer.logging)
  app.use(express.logger(webConfig.webServer.logging));

// spin up the server
var server = http.createServer(app);
server.listen(webConfig.webServer.port, function(e){
  console.log("Server listening on ", webConfig.webServer.port);
});