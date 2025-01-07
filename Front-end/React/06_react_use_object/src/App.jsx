import { useState } from "react";

function App() {
  const [variable, setCount] = useState(0);
  const [object, setObject] = useState({ name: "Azim", age: 20 });

  const increment = () => {
    setCount(variable + 1);
  };

  const changeObj = () => {
    setObject({ ...object, age: object.age + 1 });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Variable Example: {variable}</h1>
      <button onClick={increment}>++</button>
      <hr />
      <h2>
        Object Example: Name: {object.name}, Age: {object.age}
      </h2>
      <button onClick={changeObj}>Update Object</button>
    </div>
  );
}

export default App;
