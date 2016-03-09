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
  _parseTag (tag) {
    const [ tagName, ...className ] = tag.split('.').filter(x => x !== '')
    return { tagName, className }
  }

  constructor (tag, ...content) {
    this.config = this._parseTag(tag)
    this.content = content
  }

  render () {
    const tag = this.config.tagName
    const className = this.config.className
    const attrs = []
    if (className.length) {
      attrs.push(`class="${className.join(' ')}"`)
    }
    const attributes = attrs.reduce((a,b) => `${a} ${b}`, '')
    const content = this.content.reduce((memo, c) => `${memo}${c}`, '')

    return `<${tag}${attributes}>${content}</${tag}>`
  }

  toString() {
    return this.render()
  }
}

// DO NOT MODIFY BELOW HERE
module.exports = Component
