import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)

  console.log("Rendered...")

  useEffect(() => {
    getRandomNum()
  }, []) // This Empty [] array to make the useEffect render only first time

  function getRandomNum() {
    setCounter(Math.floor(Math.random() * 90) + 10)
  }

  return (
    <div>
      <h1 onClick={getRandomNum}>{counter}</h1>
    </div>
  )
}

export default App
