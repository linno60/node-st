var timers = {}

/*===================== Exemplo de setTimeout simples ========================*/
var simpleTimer = function() {
  console.log('A => ' + new Date())
  setTimeout(() => {
    console.log('B => ' + new Date())
  }, 3000)
}

//console.log(arguments)

module.exports = {
  timers: timers
}
