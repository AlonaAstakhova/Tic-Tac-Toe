import { useState, useEffect } from 'react'
import { Cell } from './components/Cell.js'
import { ResetButton } from './components/ResetButton.js'

function App() {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [go, setGo] = useState('cross')
  const [winMessage, setWinMessage] = useState(null)
  const [winArr, setWinArr] = useState([])

  const message = 'Now ' + go + ' is going!'

  let messageColor = go === 'circle' ? 'p blue' : 'p red'

  const checkWinner = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winCombos.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === 'circle')

      if (circleWins) {
        setGo('circle')
        setWinMessage('Circle WINS!')
        setWinArr(arr)
        return
      }
    })

    winCombos.forEach((arr) => {
      let crossWins = arr.every((cell) => cells[cell] === 'cross')

      if (crossWins) {
        setGo('cross')
        setWinMessage('Cross WINS!')
        setWinArr(arr)
        return
      }
    })
  }

  useEffect(() => {
    checkWinner()
  }, [cells])

  const resetBoard = () => {
    setCells(Array(9).fill(null))
    setGo('cross')
    setWinMessage(null)
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <p className={messageColor}> {winMessage || message}</p>
      <div className="board">
        {cells.map((cell, id) => (
          <Cell
            key={id}
            id={id}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winMessage={winMessage}
            winArr={winArr}
          />
        ))}
      </div>
      <ResetButton resetBoard={resetBoard} />
    </div>
  )
}

export default App
