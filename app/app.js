var express = require('express')

var db = require('./config/dbconnect')
var timers = require('./libs/timers')
var globals = require('./libs/globals')

var app = express()
var port = process.env.PORT || 3000

app.get('/products', (request, response) => {

  let connection = db.connect()

  connection.query('SELECT * FROM figures', (error, results) => {
    if(error) {
      console.log('Erro na consulta ao banco! ', error)
    } else {
      response.send(results)
    }
  })
  connection.end()
})

app.listen(port, () => {
  console.log(' ---------- server running in port: '+port+ ' ----------')
})
