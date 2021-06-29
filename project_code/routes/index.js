var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/error',(req,res) => {
  res.render('error',{layout: false});
});

router.get('/admin',(req,res) => {
  res.render('admin',{layout: 'layoutadmin.hbs'});
});


module.exports = router;
