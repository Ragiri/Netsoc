const mysql = require('mysql');
let conf = require('../conf_sql')

const updateLike = (params) => {
	return new Promise((resolve, reject) => {
	   const mysqlClient = mysql.createConnection(conf);
	   let str = `UPDATE WEBSITE SET NB_LIKE = NB_LIKE + 1 WHERE ID_LINK = ? `
	   let query = [params.id, params.like];

	   mysqlClient.query(str, query, (err, results, fields) => {
		 if (err) {
		   console.log(err)
		   resolve(err.message);
		 }
		 
		 console.log(results);
		 console.log(fields);
		 resolve("Success");
	   });
		 mysqlClient.end();
  })
}

module.exports = updateLike