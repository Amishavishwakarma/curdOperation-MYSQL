var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1"
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
