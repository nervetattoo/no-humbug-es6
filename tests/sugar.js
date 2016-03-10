'use strict'

const test = require('tape')
const Component = require('../katas/sugar')


test('test functions', t => {
  const title = new Component('h1.large.alt', 'Hello world')

  t.equal(typeof Component, 'function')
  t.equal(typeof title, 'object')

  const subtitle = new Component('h2', 'Whats up?')
  t.equal(subtitle.render(), '<h2>Whats up?</h2>')

  const header = new Component('div.row', title, subtitle)

  const result = header.render().replace(/>(\s+)</, '><')

  const expect = '<div class="row"><h1 class="large alt">Hello world</h1><h2>Whats up?</h2></div>'
  t.equal(result, expect)

  t.end()
})
