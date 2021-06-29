var db = require("../dbcon");
exports.aduser = (req,res,next) =>{
    const {par1,par2,par3,par4,par5,par6,par7,par8,par9,par10} = req.body;
    if(par1 && par2 && par3 && par4 && par5 && par6 && par7 && par8 && par9 && par10){
        // Not doing validation yet.
        db.query("call add_patient(?,?,?,?,?,?,?,?,?,?);",[par1,par2,par3,par4,par5,par6,par7,par8,par9,par10],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No patient added");
            }else{
                req.s1 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.addoctor = (req,res,next) =>{
    const {par1,par2,par3,par4,par5,par6,par7,par8,par9,par10,par11} = req.body;
    if(par1 && par2 && par3 && par4 && par5 && par6 && par7 && par8 && par9 && par10 && par11){
        // Not doing validation yet.
        db.query("call add_doctor(?,?,?,?,?,?,?,?,?,?,?);",
        [par1,par2,par3,par4,par5,par6,par7,par8,par9,par10,par11],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No doctor added");
            }else{
                req.s2 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.addlab = (req,res,next) =>{
    const {par1,par2,par3,par4} = req.body;
    if(par1 && par2 && par3 && par4){
        // Not doing validation yet.
        db.query("call add_lab(?,?,?,?);",
        [par1,par2,par3,par4],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No lab added");
            }else{
                req.s3 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.addroom = (req,res,next) =>{
    const {par1,par2,par3} = req.body;
    if(par1 && par2 && par3){
        // Not doing validation yet.
        db.query("call add_room(?,?,?);",
        [par1,par2,par3],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No room added");
            }else{
                req.s4 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.roomdata = (req,res,next) =>{
    db.query("select room_id from hospital.room;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No room data");
            }else{
                req.s5 = results;
            }
        return next();    
        });
}

exports.removeroom = (req,res,next) =>{
    const {par1} = req.body;
    if(par1){
        // Not doing validation yet.
        db.query("call remove_room(?);",
        [par1],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No room deleted");
            }else{
                req.s6 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.doctordata = (req,res,next) =>{
    db.query("select doctor_id from hospital.doctor order by doctor_id;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No doctor data");
            }else{
                req.s7 = results;
            }
        return next();    
        });
}

exports.removedoctor = (req,res,next) =>{
    const {par1} = req.body;
    if(par1){
        // Not doing validation yet.
        db.query("call remove_doctor(?);",
        [par1],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No doctor deleted");
            }else{
                req.s8 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.patientdata = (req,res,next) =>{
    db.query("select patient_id from hospital.covid_patient order by patient_id;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No patient data");
            }else{
                req.s9 = results;
            }
        return next();    
        });
}

exports.removepatient = (req,res,next) =>{
    const {par1} = req.body;
    if(par1){
        // Not doing validation yet.
        db.query("call remove_patient(?);",
        [par1],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No patient deleted");
            }else{
                req.s10 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.labdata = (req,res,next) =>{
    db.query("select lab_id from hospital.lab order by lab_id;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No lab data");
            }else{
                req.s11 = results;
            }
        return next();    
        });
}

exports.removelab = (req,res,next) =>{
    const {par1} = req.body;
    if(par1){
        // Not doing validation yet.
        db.query("call remove_lab(?);",
        [par1],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("No lab deleted");
            }else{
                req.s12 = true;
            }
        return next();    
        });
    }else{
        next();
    }
}

exports.admindata = (req,res,next) =>{
    // if(true){
    db.query("select sum(hours_worked*hourly_rate) as total_salary from hospital.salary;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Fail 1");
            }else{
                req.s13 = results[0];
            }
        });
        db.query("select sum(s.count_visit)/count(*) as average_visits from \
        (SELECT count(*) as count_visit FROM hospital.visiting group by visit_date) s;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Fail 2");
            }else{
                req.s14 = results[0];
            }
        });
        db.query("select count(*) as count_doc from hospital.doctor;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Fail 3");
            }else{
                req.s15 = results[0];
            }
        });
        db.query("select count(*) as count_pat from hospital.covid_patient;",
        [],(error,results) => {
            if(error){
                console.error(error);
            } else if(!results){
                console.error("Fail 4");
            }else{
                req.s16 = results[0];
            }
            return next();
        });
}
