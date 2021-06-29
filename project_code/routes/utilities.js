
var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var utilityController = require('../controllers/utilities');


router.get('/rooms1', authController.isLoggedIn, utilityController.roomdata , (req , res) => {
  if(req.rooms){
    if(req.availrooms.length >= 0){
    let a = []
    for(x of req.availrooms){
      a.push(x.room_id);
    }
    console.log(a);
    let is = [711,712,713,714].filter(x => !a.includes(x));
    
    res.render('rooms1',{
      room_info: req.rooms,
      isinfo: is,
      ISLI: true
    });
  }else{
    
    res.render('rooms1',{
      room_info: req.rooms,
      isinfo: [],
      ISLI: true
    });
  }
}
  else{
    res.render('error',{layout: false});
  }
  
});

router.post('/bookroom', authController.isLoggedIn, utilityController.bookroom, (req,res) => {
if(req.booksuccess){
  res.render('success',{layout: false});
}
else{
 res.render('error',{layout: false,book_fail:true});
}
});


router.get('/salary1',authController.isLoggedIn, utilityController.salarydata, (req,res) => {
if(req.salary){
  res.render('salary1',{
    salary_info: req.salary,
    ISLI: true
  });
}else{
    res.render('error',{layout: false});
  }
});

router.get('/patientrecord', authController.isLoggedIn, utilityController.patientdata, (req,res) => {
  if(req.patientrecords){
    res.render('patientrecord',{
      patient_info: req.patientrecords,
      ISLI: true
    });
  }else{
      res.render('error',{layout: false});
    }
  });


  router.post('/examination', authController.isLoggedIn, utilityController.examinationdata, (req,res) => {
    if(req.examinationrecords){
      res.render('examination',{
        examination_info: req.examinationrecords,
        ISLI: true
      });
    }else{
        res.render('error',{layout: false});
      }
    });
    
    router.get('/appointmenthistory',authController.isLoggedIn, utilityController.apdata, (req,res) => {
      if(req.aprecords){
        res.render('appointment',{
          appointment_info: req.aprecords,
          ISLI: true,
          ISLP: true,
          ISLS: true
        });
      }else{
        res.render('error',{layout: false});
      }
    });

router.get('/settings',authController.isLoggedIn,(req,res) => {
  if(req.user){
    res.render('setting',{
      piinfo: req.user,
      ISLI: true,
      ISLP: true
    });
  }
  else{
    res.render('error',{layout: false, mo: "Failed to access your records :("});
  }
});

router.post('/changefn',
authController.isLoggedIn, 
utilityController.cfn, 
(req,res) => {
  if(req.changesuccess){
    res.render('success1',{
      piinfo: req.user,
      ISLI: true,
      ch: true,
      ISLP: true
    });
  }else{
    res.render('error',{
      layout: false, mo: "Failed to update"
    });
  }
});

router.post('/changeln',
authController.isLoggedIn, 
utilityController.cln, 
(req,res) => {
  if(req.changesuccess){
    res.render('success1',{
      piinfo: req.user,
      ISLI: true,
      ch: true,
      ISLP: true
    });
  }else{
    res.render('error',{
      layout: false, mo: "Failed to update"
    });
  }
});

router.post('/changeage',
authController.isLoggedIn, 
utilityController.cage, 
(req,res) => {
  if(req.changesuccess){
    res.render('success1',{
      piinfo: req.user,
      ISLI: true,
      ch: true,
      ISLP: true
    });
  }else{
    res.render('error',{
      layout: false, mo: "Failed to update"
    });
  }
});

router.post('/changepn',
authController.isLoggedIn, 
utilityController.cpn, 
(req,res) => {
  if(req.changesuccess){
    res.render('success1',{
      piinfo: req.user,
      ISLI: true,
      ch: true,
      ISLP: true
    });
  }else{
    res.render('error',{
      layout: false, mo: "Failed to update"
    });
  }
});

router.post('/changebg',
authController.isLoggedIn, 
utilityController.cbg, 
(req,res) => {
  if(req.changesuccess){
    res.render('success1',{
      piinfo: req.user,
      ISLI: true,
      ch: true,
      ISLP: true
    });
  }else{
    res.render('error',{
      layout: false, mo: "Failed to update"
    });
  }
});

router.get('/bill',authController.isLoggedIn, utilityController.billdata, (req,res) => {
  if(req.bill){
    res.render('bill',{
      bill_info: req.bill,
      ISLI: true,
      ISLP: true,
      ISLS: true
    });
  }else{
    res.render('error',{layout: false});
  }
});

router.get('/labreport',authController.isLoggedIn, utilityController.labdata, (req,res) => {
  if(req.labreport){
    console.log(req.labreport);
    res.render('labreport',{
      lab_info: req.labreport,
      ISLI: true,
      ISLP: true,
      ISLS: true
    });
  }else{
    res.render('error',{layout: false});
  }
});


module.exports = router;