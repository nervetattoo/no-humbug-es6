// Spread
const numbers = [1,8,4,5]
const minNumber = Math.min(...numbers)

// Rest
function movieDescription (movie, lead, ...actors) {
  console.log(`${movie} featured ${lead} along with ${actors.join(', ')}`)
}

movieDescription(
  'The Imitation Game',
  'Benedict Cumberbatch',
  'Keira Knightley',
  'Matthew Goode',
  'Rory Kinnear'
)

const support =  [ 'Keira Knightley', 'Matthew Goode', 'Rory Kinnear' ]
movieDescription('The Imitation Game', 'Benedict Cumberbatch', ...support)
