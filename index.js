var http = require('http'),
  express = require('express'),
  webConfig = require('./web.config'),
  controllers = require('./Controllers');

var app = express();

if(webConfig.webServer.logging)
  app.use(express.logger(webConfig.webServer.logging));

app.use('/content', express.static(__dirname + "/Content"));
app.use('/scripts', express.static(__dirname + "/Scripts"));

// wireup controllers
controllers(app);

// spin up the server
var server = http.createServer(app);
server.listen(webConfig.webServer.port, function(e){
  console.log("Server listening on ", webConfig.webServer.port);
});