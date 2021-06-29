const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'cs5200',
    database: 'hospital'
  });
  
  db.connect( (error) => {
    if(error){
      console.log("There was an error in connecting to the mysql database!");
    } else {
      console.log("MYSQL Connected !!!!");
    }
  });

  module.exports = db;