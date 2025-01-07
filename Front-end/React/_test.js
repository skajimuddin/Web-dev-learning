// Immutable concept
const obj = {
  name: "Azim",
  age: 20
};

const newObj = { ...obj };
newObj.name = "Sk Azim"; // Chamge boath. Tho fix use {...}

console.log(obj, newObj);

// ES6 Methods

// Arrow function
const add = (a, b) => {
  return a + b
};
console.log(add(2, 2))

// Map, filter, reduce
const arr = [1, 2, 3, 4, 5];

function azim(event) {

}

console.log(arr.map(() => { return 2 }));