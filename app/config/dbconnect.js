let mysql = require('mysql')

var connect = (() => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-st'
  })
})

module.exports = {
  connect: connect
}
