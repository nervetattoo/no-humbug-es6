'use strict'
var getJSON = require('../getJSON')
var app = {}

// Write functions that will work like described
//
// var result = hello(name) // returns 'Hello name'

// var result = greeter(greeting) // returns a function returning greeting + name

// app.fetch // A function that calls `getJSON` and calls `this.updateUI` with the data

const hello = name => `Hello ${name}`

const greeter = function (greeting) {
  return name => `${greeting} ${name}`
}

app.fetch = function () {
  getJSON(data => this.updateUI(data))
}

// DO NOT MODIFY BELOW HERE
module.exports = { hello, greeter, app }
