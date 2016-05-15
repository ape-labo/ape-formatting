/**
 * Test case for formatJs.
 * Runs with mocha.
 */
'use strict'

const formatJs = require('../lib/format_js.js')
const assert = require('assert')
const co = require('co')
const mkdirp = require('mkdirp')
const fs = require('fs')

describe('format-js', () => {
  const tmpDir = `${__dirname}/../tmp`
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {

  }))

  it('Format js', () => co(function * () {
    let filename = `${tmpDir}/foo.js`
    fs.writeFileSync(filename, `
    "use strict";
function print(value){
    console.log(value)
}
 print('hoge');
    `)
    yield formatJs(filename)
    assert.ok(
      fs.existsSync(filename)
    )
  }))
})

/* global describe, before, after, it */
