const mysql = require('mysql2')
const sqlDb = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jk449738@",
    database:"movieapp"
})

sqlDb.connect((err)=>{
    if(err) throw err

    console.log('sql connected')
})
 module.exports.sqlDb = sqlDb