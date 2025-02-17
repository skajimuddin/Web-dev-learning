import { useRef } from "react"

function App() {
  // Create a ref to store input element reference
  const inputRef = useRef(null)

  // Function to focus the input
  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Type something..."
      />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  )
}

export default App

// useRef is commonly used for:
// 1. Accessing DOM elements directly
// 2. Storing mutable values that don't trigger re-renders
// 3. Preserving values between renders



// IF DO WAS USED INSTEAD OF USEREF
// function App() {
//   // Function to focus the input using DOM method
//   const handleFocus = () => {
//     document.querySelector('#myInput').focus()
//   }

//   return (
//     <div>
//       <h1>DOM Manipulation Example</h1>
//       <input 
//         id="myInput"
//         type="text" 
//         placeholder="Type something..."
//       />
//       <button onClick={handleFocus}>
//         Focus Input
//       </button>
//     </div>
//   )
// }

// export default App