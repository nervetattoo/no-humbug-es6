'use strict'
var getJSON = require('../getJSON')
var app = {}

// Write functions that will work like described
//
// var result = hello(name) // returns 'Hello name'

// var result = greeter(greeting) // returns a function returning greeting + name

// app.getJSON(myCallback) // Add a callback that calls a function `updateUI` on this with the received JSON
app.fetch = function () {
  getJSON()
}

var hello = name => 'Hello ' + name
var greeter = function (greeting) {
  return name => greeting + ' ' + name
}

// DO NOT MODIFY BELOW HERE
require('../tests/arrow-functions')(hello, greeter, app)
