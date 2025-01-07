import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-screen flex justify-center items-center">
        <h1 className="text-white text-5xl font-bold">SK AZIM</h1>
        <div className="fixed bottom-0">
          <button
            onClick={() => setColor("red")}
            className="text-white bg-red-500 rounded-2xl p-7 m-5 text-xl">
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="text-white bg-green-500 rounded-2xl p-7 m-5 text-xl">
            GREEN
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white bg-blue-500 rounded-2xl p-7 m-5 text-xl">
            BLUE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
