var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('user', { name: req.query.name , email : req.query.email});
  res.send({ name: req.query.name , email : req.query.email});
});

module.exports = router;
