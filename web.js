var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var outfile = "index.html";
var out = "Hello world from index.html";
fs.writeFileSync(outfile, out);  

app.get('/', function(request, response) {
  response.send(__filename);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
