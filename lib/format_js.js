/**
 * Format javascript files.
 * @function formatJs
 * @param {string|string[]} pattern
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const aglob = require('aglob')
const fs = require('fs')
const execcli = require('execcli')

const state = (filename) => new Promise((resolve, reject) =>
  fs.stat(filename, (err, stat) => err ? reject(err) : resolve(stat))
)

/** @lends formatJs */
async function formatJs(pattern, options = {}) {
  let filenames = await aglob(pattern, {
    ignore: options.ignore
  })
  for (let filename of filenames) {
    let before = await state(filename)
    await execcli('standard-format', ['-w', filename], {
      notfound: 'Try `npm install -g standard-format`'
    })
    let after = await state(filename)
    let changed = before.size !== after.size
    if (changed) {
      console.log(`File formatted: ${filename}`)
    }
  }
}

module.exports = formatJs
