/**
 * Test case for formatJs.
 * Runs with mocha.
 */
'use strict'

const formatJs = require('../lib/format_js.js')
const assert = require('assert')
const fs = require('fs')
const mkdirp = require('mkdirp')

describe('format-js', () => {
  const tmpDir = `${__dirname}/../tmp`
  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {

  })

  it('Format js', async () => {
    let filename = `${tmpDir}/foo.js`
    fs.writeFileSync(filename, `
    "use strict";
function print(value){
    console.log(value)
}
 print('hoge');
    `)
    await formatJs(filename)
    assert.ok(
      fs.existsSync(filename)
    )
  })
})

/* global describe, before, after, it */
