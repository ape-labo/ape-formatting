/**
 * Format javascript files.
 * @function formatJs
 * @param {string|string[]} pattern
 * @param {Object} options
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const expandglob = require('expandglob')
const fs = require('fs')
const execcli = require('execcli')

const state = (filename) => new Promise((resolve, reject) =>
  fs.stat(filename, (err, stat) => err ? reject(err) : resolve(stat))
)

/** @lends formatJs */
function formatJs (pattern, options = {}) {
  return co(function * () {
    let filenames = yield expandglob(pattern, {
      ignore: options.ignore
    })
    for (let filename of filenames) {
      let before = yield state(filename)
      yield execcli('standard-format', [ '-w', filename ], {
        notfound: 'Try `npm install -g standard-format`'
      })
      let after = yield state(filename)
      let changed = before.size !== after.size
      if (changed) {
        console.log(`File formatted: ${filename}`)
      }
    }
  })
}

module.exports = formatJs
