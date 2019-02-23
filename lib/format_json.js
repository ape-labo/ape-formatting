/**
 * Format json files
 * @function formatJson
 * @param {string|string[]} pattern
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const fmtjson = require('fmtjson')

/** @lends formatJson */
async function formatJson(pattern, options = {}) {
  await fmtjson(pattern, options)
}

module.exports = formatJson
