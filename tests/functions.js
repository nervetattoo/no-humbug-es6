'use strict'

const test = require('tape')
const { hello, greeter, app } = require('../katas/functions')

const name = 'ES2015'

test('test functions', t => {

  t.same(greeter('hi')(name), `hi ${name}`)

  t.equal(hello(name), `Hello ${name}`)

  app.updateUI = function (data) { this.data = data }
  app.fetch()

  t.same(app.data, {name})

  t.end()
})
