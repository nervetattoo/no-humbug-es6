'use strict'

const test = require('tape')
const { hello, greeter, app, sum } = require('../solutions/functions')

const name = 'ES2015'

test('test functions', t => {

  t.same(greeter('hi')(name), `hi ${name}`)

  t.equal(hello(name), `Hello ${name}`)

  app.updateUI = function (data) { this.data = data }
  app.fetch()

  t.equal(sum(1,2,3,4,5), 15)
  t.equal(sum(2,3,4,5), 14)

  t.same(app.data, {name})

  t.end()
})
