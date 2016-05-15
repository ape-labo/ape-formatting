/**
 * Format json files
 * @function formatJson
 * @param {string|string[]} pattern
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const fmtjson = require('fmtjson')
const co = require('co')

/** @lends formatJson */
function formatJson (pattern, options = {}) {
  return co(function * () {
    yield fmtjson(pattern, options)
  })
}

module.exports = formatJson
