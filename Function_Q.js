// write an arrow function that returns the square of number'n

const square = (n) => n*n;

console.log(square(4));
console.log(square(8));
console.log(square(16));

// write a function that prints "Hello World" 5 times at intervals of 2s each

console.log("Hi there !");

let id = setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearTimeout(id);
    console.log("Clear Interval");
},11000);