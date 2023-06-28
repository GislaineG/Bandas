// db.js
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "exercicio_bandas"
});

module.exports = connection;