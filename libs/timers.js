/*----------------------------------------------------------------------------*/
  // simple timeout stops after 3 seconds
  var simpleTimer = (() => {
    console.log('A => ' + new Date())
    setTimeout(() => {
      console.log('B => ' + new Date())
    }, 3000)
  })
/*----------------------------------------------------------------------------*/
  // simple timeout that cancels another
  var simpleTimerCancel = (() => {
    let a = setTimeout(() => {
      console.log('A => ' + new Date())
    }, 3000)

    let b = setTimeout(() => {
      console.log('B => ' + new Date())
    }, 3000)
    clearTimeout(a)
  })
/*----------------------------------------------------------------------------*/
  // timeout function that mock a setInterval
  var timeOutInterval = (() => {
    let interval = ((callback, time) => {
      setTimeout(() => {
        callback()
        interval(callback, time)
      }, time)
    })
    interval(() => {
      console.log('R => ' + new Date())
    }, 1000)
  })
/*----------------------------------------------------------------------------*/
  // setInterval function that has a clear interval with 10 seconds
  var setIntervalTimer = (() => {
    let interval = setInterval(() => {
      console.log('I => ' + new Date())
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
    }, 10000)
  })
/*----------------------------------------------------------------------------*/
  var setImmideateZero = (() => {
    console.time('T')
      console.log('A => ' + new Date())
      setImmediate(() => {
        console.log('I => ' + new Date())
      })
      console.log('B => ' + new Date())
    console.timeEnd('T')
  })
/*----------------------------------------------------------------------------*/

//console.log(arguments)

module.exports = {
  simpleTimer: simpleTimer,
  simpleTimerCancel: simpleTimerCancel,
  timeOutInterval: timeOutInterval,
  setIntervalTimer: setIntervalTimer,
  setImmideateZero: setImmideateZero
}
