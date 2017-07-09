var express = require('express');
var router = express.Router();
var fs = require('fs');
var fs = require('mime');
var cache = []; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //serverStaticPage(res);
});

function send404(res)
{
  res.writeHead(404, {'Content-Type':'text/plain'});
  //res.write('Error 404':'Page not Found');
  res.end();
}

function sendFile(res, fileContens)
{
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(fileContens);
}

function serverStaticPage(res)
{
  var filePath = 'pubilc/index.html';
  if (cache[filePath])
  {
    sendFile(res,cache[filePath])
  }
  else
  {
    fs.exists(filePath, function(exists){
      if (exists)
      {
        fs.readFile(filePath, function(err, data){
          if (err)
          {
            send404(res);
          }
          else
          {
            cache[filePath] = data;
            sendFile(res,data);
          }
        })
      }
      else
      {
        send404(res);
      }
    })
  }
}

module.exports = router;
