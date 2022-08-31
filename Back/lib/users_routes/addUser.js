const mysql = require('mysql');
var md5 = require('md5');
let conf = require('../conf_sql')

const addUser = (params) => {
  return new Promise((resolve, reject) => {
    const mysqlClient = mysql.createConnection(conf);
	today = new Date()
	date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()

    let stmt = `INSERT INTO USERS( NAME, EMAIL, PASSWORD, DATE_INSCRIT)VALUES(?,?,?,?)`
    let user = [params.name, params.email, md5(params.pass), date];
    
    mysqlClient.query(stmt, user, (err, results, fields) => {
            if (err) {
              console.log(err)
              resolve(err.message);
            }
            // get inserted id
            console.log(results);
            resolve("Success");
          });
    mysqlClient.end();
    })
}


module.exports = addUser