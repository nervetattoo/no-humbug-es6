'use strict'

/* Write a class named Component that can run as follows:
*
var title = new Component('h1.large.alt', 'Hello world')
var subtitle = new Component('h2', 'Whats up?')
var header = new Component('div.row', title, subtitle)
var output = header.html()

Should produce the following output (whitespace between tags doesn't matter)
<div class="row">
  <h1 class="large alt">Hello world</h1>
  <h2>Whats up?</h2>
</div>
*/

class Component {
  constructor (tag, ...content) {
    this.tag = this.tag
    this.content = content
  }

  render () {
    const content = this.content.reduce((memo, c) => `${memo}${c}`, '')
    return `<${this.tag}>${content}</${this.tag}>`
  }
}

// DO NOT MODIFY BELOW HERE
module.exports = Component
