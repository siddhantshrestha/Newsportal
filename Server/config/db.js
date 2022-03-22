const mysql = require("mysql")
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sid@2058",
  database: "newsportal",
})

module.exports = db;