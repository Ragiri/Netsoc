const mysql = require('mysql');
var md5 = require('md5');
let conf = require('../conf_sql')

const authUser = (params) => {
	return new Promise((resolve, reject) => {
	   const mysqlClient = mysql.createConnection(conf);
	   let stmt = `SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?`
	   let user = [params.email, md5(params.pass)];

	   mysqlClient.query(stmt, user, (err, results, fields) => {
		 if (err) {
		   console.log(err)
		   resolve(err.message);
		 }
		 //console.log(results)
		 if (!results[0]) {
		   resolve("Not exist");
		 } else {
		   resolve(results[0]);
		 }
	   });
		 mysqlClient.end();
  })
}


module.exports = authUser