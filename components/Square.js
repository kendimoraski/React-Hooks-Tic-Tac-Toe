import React from 'react'

const style = {
  background: '#eaff87',
  border: '2px solid #C60052',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
  borderRadius: '25px',
  color: '#ff714b',
}

// With this arrow function we have an implicit return and don't need the return keyword
// We can destructure out of props right in the argument passing in
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

export default Square
