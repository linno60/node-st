var express = require('express')
var db = require('./config/database')
var timers = require('./libs/timers')
var globals = require('./libs/globals')

var app = express()

app.get('/products', (request, response) => {
  response.send('<html><body><h1>this is products response</h1></body></html>')
})

db.migrate()

app.listen(3000, () => {
  console.log('------ server running ------')
})
