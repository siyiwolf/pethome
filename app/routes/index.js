var express = require('express');
var router = express.Router();
var fs = require('fs');
var cache = []; 
//var footData = JSON.parse(fs.readFileSync('tile.json'));
console.log(__dirname);

function getdata(absPath)
{
    var data
    fs.exists(absPath, function(exists)
    {
      if(exists)
      {
        fs.readFileSync(absPath, function(err, data){
          if(err)
          {
              return data;
          }
          else
          {
              return data;
          }
        });
      }
    });
    return data
}

footData = getdata('/home/gitCode/pethome/public/tile.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', footData);
});

module.exports = router;
