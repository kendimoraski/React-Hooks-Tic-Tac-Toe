import React from 'react'
import Square from './Square'

const style = {
  border: '4px solid darkblue',
  borderRadius: '25px',
  width: '350px',
  height: '350px',
  margin: '0 auto',
  display: 'grid',
  // this creates a 3x3 board
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
}

const cornerSquareStyle = {
  borderRadius: '25px',
}

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {/* The passing in of onClick via props here is an example of what's called "props drilling"*/}
    {squares.map((square, idx) => (
      <Square key={idx} value={square} onClick={() => onClick(idx)} />
    ))}
  </div>
)

export default Board
