function multiply (first, second) {
  return first * second
}

function multiplicatorFunction (factor) {
  return function (num) {
    return multiply(factor, num)
  }
}

// Return function
var byFour = multiplicatorFunction(4)

byFour(4) // 16
byFour(100) // 400

function add (first, second) {
  return first + second
}

function arithmetic (factor, operator) {
  return function (num) {
    return operator(factor, num)
  }
}

var byFour = arithmetic(4, multiply)
var addFour = arithmetic(4, add)

byFour(4) // 16
addFour(4) // 8
