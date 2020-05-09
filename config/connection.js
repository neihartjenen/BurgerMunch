var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
  
  // Attempting to Connect
  connection.connect(function(err){
     if err { console.error("Can not connect")};
     return;
   })
console.log("You are connected as" + connection.threadId)
  });
  
  
  //export coonnection for ORM 
  module.exports= connection