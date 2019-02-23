/**
 * Format files
 * @module ape-formatting
 */

'use strict'


const formatJs = require('./format_js')
const formatJson = require('./format_json')

exports.formatJs = formatJs
exports.formatJson = formatJson

module.exports = {
  formatJs,
  formatJson
}
