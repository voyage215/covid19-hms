
var db = require("../dbcon");

exports.roomdata = (req,res,next) => {
    if(req.user){
        db.query("call room_data(?)",[req.user.doctor_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No result booking returned");
            }else{
                req.rooms = results[0];
            }
        });

        db.query("SELECT room_id FROM hospital.books WHERE booking_date='2020-11-25'",(error,results) => {
            if(error) {
                console.error(error);
            } else if (!results) {
                console.log("No result returned in 2nd query for room information");
            } else {
                req.availrooms = results;
            }
            return next();  
        });
        
    }
    else{
        next();
    }
}

exports.bookroom = (req,res,next) => {
    const {roomselect} = req.body;
    if(roomselect && req.user.doctor_id){
        db.query("call book_room(?,?)",[req.user.doctor_id,roomselect],(error,results) => {
            // console.log(error,results);
            if(error) {
                console.error("ERROR BOOKROOM: ",error);
            } else if (!results) {
                console.log("No result returned which booking room");
            } else {
                req.booksuccess = true;
            }
            return next(); 
        });
    }else{
        next();
    }
    
}

exports.salarydata = (req,res,next) => {
    if(req.user){
        db.query("call salary_data(?)",[req.user.doctor_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No salary result returned");
            }else{
                req.salary = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.patientdata = (req,res,next) => {
    if(req.user){
        db.query("call patient_data(?)",[req.user.doctor_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No patient result returned");
            }else{
                req.patientrecords = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.examinationdata = (req,res,next) => {
    const {patientselect} = req.body;
    if(req.user && patientselect){
        db.query("call examination_data(?,?)",[req.user.doctor_id,patientselect],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No examination result returned");
            }else{
                req.examinationrecords = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.apdata = (req,res,next) => {
    if(req.user){
        db.query("call appointment_data(?)",[req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No visiting record returned");
            }else{
                req.aprecords = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.billdata = (req,res,next) => {
    if(req.user){
        db.query("call bill_data(?);",[req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No billing record returned");
            }else{
                req.bill = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.labdata = (req,res,next) => {
    if(req.user){
        db.query("call lab_data(?);",[req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No lab report returned");
            }else{
                // console.log(results);
                req.labreport = results[0];
            }
            return next();  
        });
    }
    else{
        next();
    }
}

exports.cfn = (req,res,next) => {
    const {firstname} = req.body;
    if(req.user && firstname != '' && firstname.match("^[a-zA-Z\(\)]+$")){
        firstname1 = firstname.charAt(0).toUpperCase() + firstname.slice(1)
        db.query("call cfn(?,?)",[firstname1,req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Change in first name failed");
            }else{
                req.changesuccess = true;
            }
            return next();  
        });
    }else{
        next();
    }
}

exports.cln = (req,res,next) => {
    const {lastname} = req.body;
    if(req.user && lastname != '' && lastname.match("^[a-zA-Z\(\)]+$")){
        lastname1 = lastname.charAt(0).toUpperCase() + lastname.slice(1)
        db.query("call cln(?,?);",[lastname1,req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Change in first name failed");
            }else{
                req.changesuccess = true;
            }
            return next();  
        });
    }else{
        next();
    }
}

exports.cage = (req,res,next) => {
    const {age} = req.body;
    if(req.user && age != '' && age>0 && age<100){
        db.query("call cage(?,?);",[age,req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Change in age failed");
            }else{
                req.changesuccess = true;
            }
            return next();  
        });
    }else{
        next();
    }
}

exports.cpn = (req,res,next) => {
    const {phone} = req.body;
    if(req.user && phone != '' && phone.length>0 && phone.length<=10){
        db.query("call cpn(?,?);",[phone,req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Change in phone number failed");
            }else{
                req.changesuccess = true;
            }
            return next();  
        });
    }else{
        next();
    }
}

exports.cbg = (req,res,next) => {

    const {bloodgroup} = req.body;

    if(req.user && bloodgroup != '' && bloodgroup != req.user.blood_group){
        db.query("call cbg(?,?);",[bloodgroup,req.user.patient_id],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Change in blood group failed");
            }else{
                req.changesuccess = true;
            }
            return next();  
        });
    }else{
        next();
    }
}
