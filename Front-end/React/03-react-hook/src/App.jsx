import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={decrement}>DECREMENT</button>
      <p style={{ display: "inline", margin: "20px" }}>{count}</p>
      <button onClick={increment}>INCREMENT</button>
    </>
  );
}

export default App;