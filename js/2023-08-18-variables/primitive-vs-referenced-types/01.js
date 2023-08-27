/* Primitives are immutable  */
let num1 = 3;

let myStr = "hello";

myStr[0] = "x";

console.log(myStr);

/* Referenced types are mutable */

let myArr1 = ["h", "e", "l", "l", "o"];

myArr1[0] = "x";

console.log(myArr1);

let myOddNum1 = 7;

let myOddNum2 = myOddNum1;

myOddNum1 = myOddNum1 + 2;

console.log(myOddNum2, myOddNum1);

let myLuckyNums1 = [7, 9, 2];

let myLuckyNums2 = myLuckyNums1;

let myLuckyNums3 = [7, 9, 2];

myLuckyNums1[0] = 14;

console.log(myLuckyNums2);

let myObj1 = { id: 3, color: "red" };

let myObj2 = myObj1;

myObj2.id = 4;

console.log(myObj1);
