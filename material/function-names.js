var fns = require('./functions')

Object.keys(fns).forEach(function (key) {
  var fn = fns[key]
  if (fn.name) {
    console.log(key, 'is named', fn.name)
  } else {
    console.log(key, 'is unnamed')
  }
})
