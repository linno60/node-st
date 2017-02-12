var net = require('net')

var connections = []

var broadcast = ((message, origin) => {
  connections.forEach((connection) => {
    if(connection === origin) return
    connection.write(message)
  })
})

net.createServer((connection) => {

  connections.push(connection)

  //connection.write('connection success!')

  //listen each client connection
  connection.on('data', (msg) => {

    let command = msg.toString()

    if(command.indexOf('/nickname ') === 0) {
      let nickname = command.replace('/nickname ', '')
      broadcast(connection.nickname + ' is now ' + nickname)
      connection.nickname = nickname
      return
    }

    broadcast(connection.nickname + ' > ' + msg, connection)
  })

}).listen(3000, () => {
  console.log('------ server running ------')
})
