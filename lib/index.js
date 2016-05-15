/**
 * Format files
 * @module ape-formatting
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get formatJs () { return d(require('./format_js')) },
  get formatJson () { return d(require('./format_json')) }
}
