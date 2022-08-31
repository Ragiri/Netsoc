const mysql = require('mysql');
let conf = require('../conf_sql')

const addWebsite = (params) => {
  return new Promise((resolve, reject) => {
    const mysqlClient = mysql.createConnection(conf);
	today = new Date()
	date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
	if (!params.name || !params.description || !params.img_url || !params.link)
		resolve("Error in body: one parameter missing")
    let str = `INSERT INTO WEBSITE( NAME, DESCRIPTION, IMGURL, LINK, NB_LIKE, NB_VIEW)VALUES(?,?,?,?,?,?)`
    let user = [params.name, params.description, params.img_url, params.link, 1, 1];
    
    mysqlClient.query(str, user, (err, results, fields) => {
            if (err) {
              console.log(err)
              resolve(err.message);
            }
            // get inserted id
            console.log(results);
            console.log(fields);
            resolve("Success");
          });
    mysqlClient.end();
    }).catch((err) => {return("error connect to db")})
}

module.exports = addWebsite

