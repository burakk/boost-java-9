/*
falsy values:

false
0
""
null
undefined
NaN

*/

let myNum;

if (false) {
  console.log("hello");
}

if (true) {
  console.log("hi there! ");
}

const score = 52;

if (score > 70) {
  console.log("Notunuz aa");
} else if (score > 50) {
  console.log("Notunuz bb");
} else {
  console.log("Notunuz cc ");
}

// Js equality check

const num1 = 3; //number
const numStr = "3"; //string

//type coersion
if (num1 == numStr) {
  console.log("Evet eşit");
}

//strict equality check operator
if (num1 === numStr) {
  console.log("eşit");
} else {
  console.log("eşit değil");
}
