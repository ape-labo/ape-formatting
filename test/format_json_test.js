/**
 * Test case for formatJson.
 * Runs with mocha.
 */
'use strict'

const formatJson = require('../lib/format_json.js')
const assert = require('assert')
const co = require('co')
const fs = require('fs')
const mkdirp = require('mkdirp')

describe('format-json', () => {
  const tmpDir = `${__dirname}/../tmp`
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {

  }))

  it('Format json', () => co(function * () {
    let filename = `${tmpDir}/bar.json`
    fs.writeFileSync(filename, `
  { "a": 123,      "c": "hoge", 
    "b": "aaa" }
    
    
    `)
    yield formatJson(filename, {
      sort: true
    })
    assert.ok(
      fs.existsSync(filename)
    )
  }))
})

/* global describe, before, after, it */
