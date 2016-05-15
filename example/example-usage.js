'use strict'

const apeFormatting = require('ape-formatting')

// Format javascript files
apeFormatting.formatJs('lib/*.js', {
  ignore: 'index.js'
}).then(() => {
  /* ... */
})

// Format json files
apeFormatting.formatJson('lib/*.json', {
  indent: 2,
  sort: true
}).then(() => {
  /* ... */
})
