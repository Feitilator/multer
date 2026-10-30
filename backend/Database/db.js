const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: "127.0.1.30",
    user: "root",
    password: "",
    database: "multer",
    port: 3306
})

module.exports = pool