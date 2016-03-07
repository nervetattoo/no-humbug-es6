'use strict'

class Heading {
  constructor (title, attributes = {}, tagName='h1') {
    this.title = title
    this.attributes = attributes
    this.tagName = tagName
  }

  render () {
    var attrs = this.attributes
    var attributes = Object.keys(attrs)
      .map(key => `${key}="${attrs[key]}"`)
      .reduce((memo, a) => ' ' + memo + a, '')
    return `<${this.tagName}${attributes}>${this.title}</${this.tagName}>`
  }
}

const hello = new Heading('Hello world', {
  class: 'small'
})
console.log(hello.render())
