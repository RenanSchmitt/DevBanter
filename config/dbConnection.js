const mysql = require('mysql');
const dotenv = require('dotenv').config();
 
if (dotenv.error) {
    throw dotenv.error
}

var connMySQL = function(){
    console.log("Conexão com o banco de dados estabelecida. ");
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    });
}


module.exports = function () {
    "O autoload carregou o módulo de conexão com o bd"
    return connMySQL;
} 