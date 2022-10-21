import { useEffect, useState } from 'react'
import './App.css'
import CardPanel from './components/CardPanel'
import Counter from './components/Counter'

function App() {
  const [current, setCurrent] = useState(0)
  const [max, setMax] = useState(0)
  const [images, setImages] = useState([])
  const [clickedImages, setClickedImages] = useState([])

  useEffect(() => {
    newBoard()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const newBoard = () => {
    const array = []
    for (let i = 0; i < 10; i++) {
      addNonRepeatingNumber(array)
    }
    setImages(array)
  }

  const addNonRepeatingNumber = (array) => {
    const number = Math.floor(Math.random() * 18 + 1)
    if (array.includes(number)) {
      addNonRepeatingNumber(array)
    } else {
      array.push(number)
    }
  }

  const clickHandler = (number, id) => {
    if (clickedImages.includes(number)) {
      if (current > max) {
        setMax(current)
      }
      setClickedImages([])
      setCurrent(0)
      newBoard()
    } else {
      setClickedImages((prev) => prev.concat(number))
      setCurrent((current) => current + 1)
      newBoard()
    }
  }
  return (
    <div className='App'>
      <div className='header'>
        <h3>Rick and Morty:</h3>
        <h3>the memory game</h3>
        <div className='counter'>
          <span>
            Current score:
            <Counter counter={current} />
          </span>
          <span>
            High Score:
            <Counter counter={max} />
          </span>
        </div>
      </div>
      <span className='hint'>
        Get points by clicking on character. Clicking on same character twice
        ends the game.
      </span>
      <div className='content'>
        <CardPanel
          clickHandler={clickHandler}
          numbers={images}
        />
      </div>
    </div>
  )
}

export default App
