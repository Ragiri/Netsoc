const mysql = require('mysql');
let conf = require('../conf_sql')

const getUser = (userId) => {
	return new Promise((resolve, reject) => {
	   const mysqlClient = mysql.createConnection(conf);
	   let stmt = `SELECT * FROM USERS WHERE ID = ?`
	   let user = [userId];

	   mysqlClient.query(stmt, user, (err, results, fields) => {
		 if (err) {
		   console.log(err)
		   resolve(err.message);
		 }
		 if (!results[0]) {
		   resolve("Not exist");
		 } else {
		   resolve(results[0]);
		 }
	   });
		 mysqlClient.end();
  })
}

module.exports = getUser