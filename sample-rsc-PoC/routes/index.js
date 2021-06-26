var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('./views/index');
  console.log("inside get homepage")
});

module.exports = router;
console.log("hello")