<br/>

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3ZHRm4yFPUXCcdnWUNBXPJEhsImIwthTQSF4masCFQnQR4meEyyAL0eMqLossUUl403Fk&usqp=CAsU)

> I thing when we are changing values of an object or array the value is changes not menory address. so we have to user ... map like this ways

## React Props

Props are used to pass data to a component in React. They allow you to make components reusable and dynamic by passing different values for each instance.

Example Usage:
```html
<Person name="Azim" />
<Person name="Azim2" />
```

Method 1: Destructuring Props
```jsx
function Person({ name="Not available" }) {
  return (
    <>
      <h1>My name is {name}</h1>
    </>
  );
}
```
Method 2: Accessing Props via props Object
```jsx
function Person(props) {
  return (
    <>
      <h1>My name is {props.name}</h1>
    </>
  );
}
```

## Inline CSS in React

React expects a JavaScript object, not a string. JavaScript objects in React require camelCase for CSS property names and must not include semicolons

```jsx
<p style={{ display: "flex" }}>Azim</p>
```

## useState in React

Her's the `App.jsx`

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
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
```

### If you want to use like this 

```jsx
function increment() {
    setCount(count + 1);
    setCount(count + 1);
}
```
> This won't work because React batches state updates and both calls use the same count value, resulting in a single increment.

### insted use this
```jsx
function increment() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
}
```
> Why this works: The functional update ensures each update uses the latest state, correctly incrementing by 2.

## Closure

Closure : A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
function's variables

Note:
When using function to initilize value use it like this: 
```jsx
const [count, setCount] = useState(random()) ❌
const [count, setCount] = useState(random)   ✅
```

## useState in Objects

update object like this

```jsx
const changeObj = () => {
    setObject({ ...object, age: object.age + 1 });
}
```
> The spread operator will spread the object, and the age property is overwritten because, in JavaScript, directly updating a single key-value pair in an immutable way is not possible.

### For arrays use `.map` function

Example:
```jsx
const changeArray = () => {
    setArray(array.map((item) =>
        item.id === targetId ? { ...item, value: newValue } : item
    ));
};
```

> In this example, the .map function iterates over the array, and if an item's id matches the targetId, it creates a new object with updated properties using the spread operator. Otherwise, it returns the item unchanged. This ensures immutability while updating the array.

## Simple Input Form (Recomented)
```jsx
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
      <form onSubmit={handleFormData}>
        <input placeholder="Enter username" type="text" name="username" />
        <input placeholder="Enter password" type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}
```
## Simple Input Form v19 (Recomented)
```jsx
function App() {
  function handleFormData(formData) {
    const username = formData.get("username")
    const password = formData.get("password")
    console.log(username, password)
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FORM NEW STYLE</h1>
      <form action={handleFormData}>
        <input placeholder="Enter username" type="text" name="username" />
        <input placeholder="Enter password" type="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}
```


## Forms in React (full controle)

> When passing Array or Object into a new variable in js the reference is of original is send so we have to use spred opreter 

The standard way with Forms is to use Controlled Components. So we make React state to be the "single source of truth".

Example:
```jsx
<input
  placeholder="Enter Your name"
  type="text"
  value={name}
  onChange={(event) => {
    setName(event.target.value);
  }}
/>
```
> In this example name is a state variable

## Handling Multiple Inputs (full controle)

```jsx
function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleFormData(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });

    // console.log(event.target.name); >> This returns the name of that HTML element
    // console.log(event.target.value); >> This returns the value of that HTML element
    // [event.target.name] >> Is called computed property name
  }

  return (
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
  );
}
```

## UseEffect

Syntax: 
```jsx
useEffect(() => {
  // Your code here
}, [DEPENDENCY]);
```
> If the DEPENDENCY array is empty ([]), the useEffect will run only once, when the component is mounted (on the first render).

Example:
```jsx
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRandomNum();
  }, []); // This Empty [] array to make the useEffect render only first time

  function getRandomNum() {
    setCounter(Math.floor(Math.random() * 90) + 10);
  }

  return (
    <div>
      <h1 onClick={getRandomNum}>{counter}</h1>
    </div>
  );
}
```