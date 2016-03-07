'use strict'

var assert = require('assert')

module.exports = function(hello, greeter, app) {
  var name = 'ES2015'

  assert.equal(hello(name), 'Hello ' + name)
  assert.equal(greeter('hi')(name), 'hi ' + name)

  app.updateUI = function (data) { this.data = data }
  app.fetch()
  assert.deepEqual(app.data, {name})

  console.log('Great work!');
}
