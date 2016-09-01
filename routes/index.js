var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});
router.get('/about', function(req, res, next){
  res.render('about');
})
router.get('/services', function(req, res, next){
  res.render('services');
})
router.get('/products', function(req, res, next){
  res.render('products');
})
router.get('/blog', function(req, res, next){
  res.render('blog');
})
router.get('/contact', function(req, res, next){
  res.render('contact');
})
router.get('/schedule', function(req, res, next){
  res.render('schedule');
})

module.exports = router;
