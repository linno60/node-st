var net  = require('net')
var prompt = require('prompt')
var client = net.connect(3000)

client.on('connect', () => {
  client.write('new client connected!')

  //prompt.start()
  // prompt.get(['nickname'], (err, result) => {
  //   client.write('/nickname'+result.nickname)
  // })
})

client.on('data', (message) => {
  console.log(message.toString())
})

process.stdin.on('readable', () => {
  let message = process.stdin.read()
  if(!message) { return }
  message = message.toString().replace(/\n/, '')

  client.write(message)
})
