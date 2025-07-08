import { useState } from 'react'

function Square({ value, onClick, className }) {
  return (
    <button className={`square ${className}`} onClick={onClick}>
      {value}
    </button>
  )
}

function Board({ squares, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          className={value ? (value === 'X' ? 'x' : 'o') : ''}
        />
      ))}
    </div>
  )
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function calculateWinner(squares) {
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
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  function handleSquareClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  function handleReset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(square => square !== null)
  
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (isDraw) {
    status = "It's a draw!"
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  )
}

export default App 