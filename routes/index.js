var express = require('express');
var router = express.Router();
var stripe = require("stripe")("sk_test_je4ROTgvjNdXQ3tqF3iB8wrJ");

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

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Apprentice of Peace'
  });
});

router.post('/order', function(req, res) {
  var token = req.body.stripeToken;
      stripe.orders.create({
        currency: 'usd',
        items: [{
            type: 'sku',
            parent: 'sku_97DNpYPYh0SCZq'
          }],
        shipping: {
          name: req.body.stripeShippingName,
          address: {
            line1: req.body.stripeShippingAddressLine1,
            city: req.body.stripeShippingAddressCity,
            country: req.body.stripeShippingAddressCountry,
            postal_code: req.body.stripeShippingAddressZip
          }
        },
        email: req.body.stripeEmail
      }).then(function(order){
        stripe.orders.pay(order.id, {
          source: token
        }, function(err, order) {
        });
          res.render('/products', {thanks: "Thank you for your purchase!"});
      })
    })

module.exports = router;
