{
  const input = 'John Doe:100 dollars'
  const [ name, amount ] = input.split(':')
  console.log(name, amount);
}

{
  const config = {
    name: 'John Doe',
    amount: '100 dollars'
  }
  const { name, amount } = config
  console.log(name, amount);
}
