'use strict'

function sleep(time, value) {
  return new Promise(resolve => setTimeout(resolve, time, value))
}

exports = module.exports = sleep
exports.default = sleep
