// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./App.css";

// App version
const version = "0.01 (Beta)";

// Products array
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

// Render list of products
function renderProducts() {
  return products.map((product) => (
    <li key={product.id} className="azim-li">
      {product.title}
    </li>
  ));
}

// Button
function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick} className="azim-button">
      Show list
    </button>
  );
}

// useState button
function ststeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

// Main comp
function App() {
  return (
    <>
      <div className="azim-bg">
        <h1 className="azim-h1">
          React App&nbsp;
          <span className="azim-span">{version}</span>
        </h1>
        <br />
        <MyButton />
        <br />
        <ul className="azim-ul">{renderProducts()}</ul>
        <br />
        <ststeButton />
      </div>
    </>
  );
}

export default App;
