function hello (name) {
  console.log('Hello ' + name)
}

var hello2 = function (name) {
  console.log('Hello ' + name)
}

var hello3 = (name) => {
  console.log('Hello ' + name)
}

var hello4 = name => console.log('Hello ' + name)

var h = {
  ello (name) {
    console.log('Hello ' + name)
  }
}

if (require.main === module) {
  hello('Raymond') // Hello Raymond
  hello2('Raymond') // Hello Raymond
  hello3('Raymond') // Hello Raymond
  hello4('Raymond') // Hello Raymond
  h.ello('Raymond') // Hello Raymond
}

module.exports = {
  first: hello,
  second: hello2,
  third: hello3,
  fourth: hello4,
  fifth: h.ello
}

console.log(hello.name) // hello
console.log(hello2.name) //
console.log(hello3.name) //
console.log(hello4.name) //
console.log(h.ello.name) // ello
