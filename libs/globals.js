/*----------------------------------------------------------------------------*/
  var globalObject = (() => {
    Object.keys(global).forEach((value) => {
      console.log(value)
    })
  })
/*----------------------------------------------------------------------------*/
  var globalProcess = (() => {
    Object.keys(process).forEach((value) => {
      console.log(value)
    })
  })
/*----------------------------------------------------------------------------*/

module.exports = {
  globalObject: globalObject,
  globalProcess: globalProcess
}
