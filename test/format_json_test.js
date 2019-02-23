/**
 * Test case for formatJson.
 * Runs with mocha.
 */
'use strict'

const formatJson = require('../lib/format_json.js')
const assert = require('assert')
const fs = require('fs')
const mkdirp = require('mkdirp')

describe('format-json', () => {
  const tmpDir = `${__dirname}/../tmp`
  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {

  })

  it('Format json', async () => {
    let filename = `${tmpDir}/bar.json`
    fs.writeFileSync(filename, `
  { "a": 123,      "c": "hoge", 
    "b": "aaa" }
    
    
    `)
    await formatJson(filename, {
      sort: true
    })
    assert.ok(
      fs.existsSync(filename)
    )
  })
})

/* global describe, before, after, it */
