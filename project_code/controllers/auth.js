var db = require("../dbcon");
var jwt = require("jsonwebtoken");

const { promisify } = require("util");
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username | !password) {
      return res.status(400).render("login", {
        message: "Please provide the username or password",
      });
    }
    if(username=="admin"&&password=="admin"){
        return res.status(200).render('admin',{layout: 'layoutadmin.hbs'});
    }
    if(username.slice(-3) == "doc") {
        db.query(
        "call doctorlogin(?);",
        [username],
        (error, results) => {
            if (!results || results[0].length == 0) {
            return res
                .status(401)
                .render("login", { message: "Incorrect username or password" });
            } else {
            
            if (results[0][0].password == password) {
                const token = jwt.sign({ username: username }, "rtx3080", {
                expiresIn: "90d",
                });


                const cookieOptions = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                };

                if (results[0][0].username.search("pat") != -1) {
                res.cookie("happy", token, cookieOptions);
                res.status(200).redirect("/users/patient");
                } else if (results[0][0].username.search("doc") != -1) {
                res.cookie("happy", token, cookieOptions);
                res.status(200).redirect("/users/doctor");
                } else {
                res.status(401).redirect("/error");
                }
            } else {
                return res
                .status(401)
                .render("login", { message: "Incorrect username or password" });
                }
            }
        });
    } else if (username.slice(-3) == "pat") {
        db.query(
            "call patientlogin(?);",
            [username],
            (error, results) => {
                if (!results || results[0].length == 0) {
                return res
                    .status(401)
                    .render("login", { message: "Incorrect username or password" });
                } else {
                
                if (results[0][0].password == password) {
                    const token = jwt.sign({ username: username }, "rtx3080", {
                    expiresIn: "90d",
                    });
    
    
                    const cookieOptions = {
                    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    };
    
                    if (results[0][0].username.search("pat") != -1) {
                        res.cookie("happy", token, cookieOptions);
                        res.status(200).redirect("/users/patient");
                    } else if (results[0][0].username.search("doc") != -1) {
                        res.cookie("happy", token, cookieOptions);
                        res.status(200).redirect("/users/doctor");
                    } else {
                        res.status(401).redirect("/error");
                    }
                } else {
                    return res
                    .status(401)
                    .render("login", { message: "Incorrect username or password" });
                    }
                }
            });
    }
    else {
        return res
        .status(401)
        .render("login", { message: "Incorrect username or password" });
    }  
  } catch (error) {
    console.error(error);
  }
};

// A middleware to handle login
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.happy) {
    try {
      const decoded = await promisify(jwt.verify)(req.cookies.happy, "rtx3080");

      // Check user still exists
      if(decoded.username.slice(-3) == "doc"){
        db.query(
            "call doctorlogin(?);",
            [decoded.username],
            (error, results) => {
            if (!results) {
                console.error(error);
                return next();
            }
            
            req.user = results[0][0];
            return next();
            });
        }
        else if(decoded.username.slice(-3) == "pat"){
            db.query(
                "call patientlogin(?);",
                [decoded.username],
                (error, results) => {
                if (!results) {
                    console.error(error);
                    return next();
                }
                req.user = results[0][0];
                return next();
            });
        }
        else {
            next();
        }    
    } 
    catch (error) {
      return next();
    }
  } else {
    next();
  }
};

exports.logout = async (req,res) => {
    res.cookie('happy', 'logout', {
        expires: new Date(Date.now() + 3000),
        httpOnly: true
    });

    res.status(200).redirect('/');
}
