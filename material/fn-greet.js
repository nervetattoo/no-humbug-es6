var random = () => {
  var greetings = ['hi', 'hello']
  var index = Math.floor(Math.random() * greetings.length)
  return greetings[index]
}

var greeting = (greeting, name) => greeting + ' ' + name

var speak = message => {
  console.log(message)
}

var scream = message => {
  speak(message.toUpperCase())
}

speak(greeting(random(), 'Raymond'))
scream(greeting(random(), 'Raymond'))
