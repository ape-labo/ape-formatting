'use strict'

const apeFormatting = require('ape-formatting')

apeFormatting.formatJs('lib/*.js', {
  ignore: 'index.js'
}).then(() => {
  /* ... */
})
