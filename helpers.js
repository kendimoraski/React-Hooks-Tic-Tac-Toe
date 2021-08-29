export function calculateWinner(squares) {
  // This is called a lookup array. It contains all the winning moves. Note that the numbers here are *indexes*, not the numbers inside.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    // This is ES6 destructuring:
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// This is a test array:
const squares = [null, null, null, 'X', 'X', 'O', null, null, null]

console.log(calculateWinner(squares))
