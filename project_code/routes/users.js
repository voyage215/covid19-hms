var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

router.get('/patient', authController.isLoggedIn , async (req, res)  => {
  
  
  var today = new Date(Date.now()); 
  var year = today.getFullYear();
  var mon = today.getMonth()+1;
  var da = today.getDate();
  var output =da+"-"+mon+"-"+year;
  
  if(req.user){
    // Fetch weather
    let weather;
    await fetch('http://api.weatherapi.com/v1/current.json?key=5b89909a88b74882ac4104707202011&q=Boston').then(response => response.json()).then(data1 => weather = data1).catch(err => console.log(err));
    try{
      w = weather['current']['temp_c'];
      c = weather['current']['condition']['text']
    } catch(error){
      w = 10.2
      c = "Funny day"
    }
    res.render('patientprofile', {
      information: req.user,
      temperature: w,
      condition: c,
      date: output,
      ISLI: true,
      ISLS: true
    });
  } else{
    res.redirect('/login');
  }
  
});

router.get('/doctor', authController.isLoggedIn , async (req, res)  => {

  
  var today = new Date(Date.now()); 
  var year = today.getFullYear();
  var mon = today.getMonth()+1;
  var da = today.getDate();
  var output =da+"-"+mon+"-"+year;
  if(req.user){
    // Fetch weather
    let weather;
    await fetch('http://api.weatherapi.com/v1/current.json?key=5b89909a88b74882ac4104707202011&q=Boston').then(response => response.json()).then(data1 => weather = data1).catch(err => console.log(err));
    try{
      w = weather['current']['temp_c'];
      c = weather['current']['condition']['text']
    } catch(error){
      w = 10.2
      c = "Funny day"
    }
    res.render('doctorprofile', {
      information: req.user,
      temperature: w,
      condition: c,
      date: output,
      ISLI: true
    });
  } else{
    res.redirect('/login');
  }
  
});



module.exports = router;
