var http = require('http');
var app = require('./app/app');

server =  http.createServer(app).listen(8080, function(){
   console.log('App Server start:listen port 8080');
}) 
