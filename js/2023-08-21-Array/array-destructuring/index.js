const myArr = [2, 4, 5, 6, 7];

const num1 = myArr[0];

const num2 = myArr[1];

// array destructuring
const [a, b, c, d, e, f, g] = myArr;

console.log(a, b, c, d, e, f, g);

//default values

const fruits = ["apple", "banana", "orange"];

const [f1, f2, f3, f4 = "apple"] = fruits;

console.log(f4);

// rest operator

const superHeros = ["Batman", "Spiderman", "Hulk"];

const [h1, ...rest] = superHeros;

console.log(rest);

// swap items of an array via destructuring

const testArr = [3, 4];

[testArr[0], testArr[1]] = [testArr[1], testArr[0]];

console.log(testArr);
