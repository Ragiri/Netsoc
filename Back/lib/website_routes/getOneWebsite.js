const mysql = require('mysql');
let conf = require('../conf_sql')

const getOneWebsite = (params) => {
	return new Promise((resolve, reject) => {
	   const mysqlClient = mysql.createConnection(conf);
	   let str = `SELECT * FROM WEBSITE WHERE ID_LINK = ?`
	   let query = [params];

	   mysqlClient.query(str, query, (err, results, fields) => {
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


module.exports = getOneWebsite