var express = require('express');
var router = express.Router();
var fs = require('fs');
var fs = require('mime');
var cache = []; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
