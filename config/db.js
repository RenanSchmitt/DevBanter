const mysql = require('mysql');
const dotenv = require('dotenv').config();
 
if (dotenv.error) {
    throw dotenv.error
}

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

con => new Promise((resolve, reject) => {
    con.connect((err, contents) => {
        if(err)
            reject(err)
         else 
            resolve (contents)
    })
})

module.exports = con;