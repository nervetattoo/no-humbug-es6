'use strict'

const add = (a,b)=>a+b
const avg = (a,b,i) => {
  return ((a * i) + b) / (i + 1)
}

function parseDebt (inputString, op = add) {
  const [ name, ...loans ] = debt.split(':')
  const asInt = num => parseInt(num, 10)
  return [ name, loans.map(asInt).reduce(op) ]
}

var debt = 'Jane Doe:100:200:500:100:50'

console.log(debt);

{
  const [name, total] = parseDebt(debt)
  console.log(`${name} owes ${total}`);
}

{
  const [name, average] = parseDebt(debt, avg)
  console.log(`${name} on average owes ${average}`);
}
