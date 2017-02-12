var express = require('express')
var timers = require('../libs/timers')
var globals = require('../libs/globals')
var app = express()

app.get('/products', (request, response) => {
  response.send('<html><body><h1>this is products response</h1></body></html>')
})

console.log(timers.simpleTimer())
// console.log(timers.simpleTimerCancel())
// console.log(timers.timeOutInterval())
// console.log(timers.setIntervalTimer())
// console.log(timers.setImmideateZero())

// console.log(globals.globalObject())
// console.log(globals.globalProcess())

app.listen(3000, () => {
  console.log('------ server running ------')
})
