import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-center">
          Password Generator
        </h1>
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            className="outline—none w—full py—l px—3"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button>Copy</button>
        </div>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={(e) => setNumbersAllowed(e.target.checked)}
          />
          <label htmlFor="number">Numbers: {length}</label>
        </div>
      </div>
    </>
  );
}

export default App;
