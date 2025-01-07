import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleFormData(event) {
    setFormData((currData) => {
      console.log(currData);
      return { ...currData, [event.target.name]: event.target.value };
    });

    // console.log(event.target.name); >> This returns the name of that HTML element
    // console.log(event.target.value); >> This returns the value of that HTML element
    // [event.target.name] >> Is called computed property name
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FORM OLD STYLE</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <input
          placeholder="Enter username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleFormData}
        />
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
