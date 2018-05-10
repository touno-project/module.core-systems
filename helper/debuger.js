const consola = require('consola')
const { isDev } = require('./variables')
const Raven = require('./raven')

module.exports = {
  log (...msg) {
    if (!isDev) return
    console.log(' ', ...msg)
  },
  start (...msg) {
    if (!isDev) return
    consola.start(msg.join(' '))
  },
  success (...msg) {
    if (!isDev) return
    consola.success(msg.join(' '))
    console.log()
  },
  info (...msg) {
    if (!isDev) return
    consola.info(msg.join(' '))
  },
  error (...msg) {
    if (!isDev) return
    console.log()
    consola.error(msg.join(' '))
    console.log()
  },
  progress: {
    begin (msg) {

    },
    end (msg) {

    },
    set (min, max) {

    }
  }
}
