var express = require('express')
//var db = require('./config/database')
var timers = require('./libs/timers')
var globals = require('./libs/globals')

var app = express()
var port = process.env.PORT || 3000

app.get('/products', (request, response) => {
  let mysql = require('mysql')

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-st'
  })

  connection.query('SELECT * FROM figures', (error, results) => {
    if(error) {
      console.log('Erro na consulta ao banco! ', error)
    } else {
      //response.send('<html><body><h1>this is products response</h1><img src="../img/obi_wan_naboo.jpg"></body></html>')
      response.send(results)
    }
  })

})

app.listen(port, () => {
  console.log(' ---------- server running in port: '+port+ ' ----------')
})
