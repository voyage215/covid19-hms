var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

router.get('/adminaduser',adminController.patientdata,(req,res) => {
    res.render('adminaduser',{layout: 'layoutadmin.hbs',pd: req.s9});
  });

  router.get('/adminviz',adminController.admindata,(req,res) => {
    res.render('adminviz',{layout: 'layoutadmin.hbs',ad1: req.s13 ? req.s13 : 0,ad2: req.s14 ? req.s14: 0, ad3: req.s15 ? req.s15: 0, ad4: req.s16 ? req.s16: 0});
  });
  
  router.get('/adminaddoctor',adminController.doctordata,(req,res) => {
    res.render('adminaddoctor',{layout: 'layoutadmin.hbs',dd: req.s7});
  });
  
  router.get('/adminadlab',adminController.labdata,(req,res) => {
    res.render('adminadlab',{layout: 'layoutadmin.hbs',ld: req.s11});
  });
  
  router.get('/adminadroom',adminController.roomdata,(req,res) => {
    res.render('adminadroom',{layout: 'layoutadmin.hbs',rd: req.s5});
  });
  
  router.get('/adminsuc',(req,res) => {
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  });
  
  router.get('/adminfail',(req,res) => {
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  });
  
router.post('/adminaddpat',adminController.aduser,(req,res) => {
  if(req.s1){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminadddoc',adminController.addoctor,(req,res) => {
  if(req.s2){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminaddlab',adminController.addlab,(req,res) => {
  if(req.s3){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminaddroom',adminController.addroom,(req,res) => {
  if(req.s4){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminremoveroom',adminController.removeroom,(req,res) => {
  if(req.s6){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminremovedoctor',adminController.removedoctor,(req,res) => {
  if(req.s8){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminremovepatient',adminController.removepatient,(req,res) => {
  if(req.s10){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

router.post('/adminremovelab',adminController.removelab,(req,res) => {
  if(req.s12){
    res.render('adminsuc',{layout: 'layoutadmin.hbs'});
  }else{
    res.render('adminfail',{layout: 'layoutadmin.hbs'});
  }
});

module.exports = router;