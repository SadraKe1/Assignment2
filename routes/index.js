var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About me' });
});


router.get('/Products', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});


router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact me' });
});
module.exports = router;
