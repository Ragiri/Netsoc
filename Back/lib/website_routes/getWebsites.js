const mysql = require('mysql');
let conf = require('../conf_sql')

const getWebsites = () => {
	return new Promise((resolve, reject) => {
	   const mysqlClient = mysql.createConnection(conf);
	   let str = `SELECT * FROM WEBSITE `

	   mysqlClient.query(str, (err, results, fields) => {
		 if (err) {
		   console.log(err)
		   resolve(err.message);
		 }
		 if (!results[0]) {
		   resolve("Not exist");
		 } else {
		   resolve(results);
		 }
	   });
		 mysqlClient.end();
  })
}


module.exports = getWebsites