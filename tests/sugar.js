'use strict'

var assert = require('assert')
const Component = require('../solutions/sugar')

var title = new Component('h1.large.alt', 'Hello world')
var subtitle = new Component('h2', 'Whats up?')
var header = new Component('div.row', title, subtitle)

const result = header.render().replace(/>(\s+)</, '><')

const expect = '<div class="row"><h1 class="large alt">Hello world</h1><h2>Whats up?</h2></div>'
assert.equal(result, expect)

console.log('Great work!');
