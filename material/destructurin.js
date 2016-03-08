{
  const input = 'John Doe:100 dollars'
  const [ name, amount ] = input.split(':')
  console.log(name, amount);
}

{
  const config = {
    name: 'Jane Doe',
    amount: '100 dollars',
    nested: {
      name: 'John Doe'
    }
  }
  const {
    name,
    amount,
    nested: {
      name: name2 // Specify target variable name
    }
  } = config
  console.log(name, amount, name2);
}
