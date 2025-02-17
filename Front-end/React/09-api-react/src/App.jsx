import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      )
      const output = await response.json()
      setData(output)
    }
    fetchData() // dont use async and await insted use then, i'll code it later
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return <></>
}

export default App
