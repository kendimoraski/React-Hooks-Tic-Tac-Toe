// useState is how you create state in a Function(al) Component with React Hooks
import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const styles = {
  width: '200px',
  margin: '20px auto',
}

// This will be the heart of our application w/ lots of logic inside of it, so we're going to use curly braces with a `return` keyword
const Game = () => {
  // This was formerly [board, setBoard] but we changed it for timetravel
  const [history, setHistory] = useState([Array(9).fill(null)])
  // This will be the actual step we are on in the game
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  // We pass in the most recent step
  const winner = calculateWinner(history[stepNumber])

  // This is the main logic that controls the game
  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    // This will be the most current move
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    // If user clicks an occupied square or if the game is won, return
    if (winner || squares[i]) return
    // Put an X or an O in the clicked square, representing the move of either opposing player.
    squares[i] = xIsNext ? 'X' : 'O'
    // we use spread operator on timeInHistory because we want to keep it
    setHistory([...timeInHistory, squares])
    // Gives us next step number
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    // If the step is an even number, it sets xIsNext to true, otherwise to false
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () =>
    history.map((_step, move) => {
      // renders out buttons where we jump back and forth in time
      const destination = move ? `Go to move#${move}` : 'Go to start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })

  return (
    <div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : // based on xIsNext's truthiness, the game tells the player whether X or O goes next
              'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </div>
  )
}

export default Game
