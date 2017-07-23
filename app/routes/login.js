var express = require('express');
var router = express.Router();

router.post('/',function(req, res, next){
  var name = req.body.uname;
  var password = req.body.upassword;
  verityAccount(name, password);
  res.send('you are login the web ' + name + password);
})

function verityAccount(name, password)
{
  ;
}

module.exports = router;
