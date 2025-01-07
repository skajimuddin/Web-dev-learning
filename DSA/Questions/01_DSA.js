// Write a function to reverse a given string.

// Method 1: Using array methods
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a loop
function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));     // Output: "olleh"
console.log(reverseStringLoop("hello")); // Output: "olleh"