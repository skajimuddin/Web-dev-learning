import "./App.css"

// THIS IS OLD WAY TO HANDEL FORM DATA
function App() {
  function handleFormData(event) {
    event.preventDefault()
    const formEl = event.target
    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)
    console.log(data.username, data.password)
    formEl.reset()
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FORM NEW STYLE</h1>
      <form onSubmit={handleFormData}>
        <input placeholder="Enter username" type="text" name="username" />
        <input placeholder="Enter password" type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

// THIS IS NEW REACT V19 WAY TO HANDEL FORM DATA
// function App() {
//   function handleFormData(formData) {
//     const username = formData.get("username")
//     const password = formData.get("password")
//     console.log(username, password)
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>FORM NEW STYLE</h1>
//       <form action={handleFormData}>
//         <input placeholder="Enter username" type="text" name="username" />
//         <input placeholder="Enter password" type="password" name="password" />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

export default App
