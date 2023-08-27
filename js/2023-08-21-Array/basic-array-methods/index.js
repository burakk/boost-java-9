/*  length property */

const userNames = ["Burak", "Kaan", "Yasemin", "Defne", "Süheyla", "Aykut"];

/*  length property */
userNames.length; //6

/*  push */
let newLength = userNames.push("Perihan", "Canan");

console.log(userNames);

/* pop */

const popped = userNames.pop();

console.log(popped);

newLength = userNames.length;

/* shift */
const arr2 = ["bardak", "telefon", "hoparlör", "monitör", "kavanoz"];

const firstEl = arr2.shift();

console.log(firstEl);


/* unshift */
const arr3 = [1,3,5,7,11];

const modifiedArr3Length = arr3.unshift(128, 256);

console.log(arr3, modifiedArr3Length)


/*  concat */
const arrNums1 = [1,2,3];
const arrLetters1 = ["B", "x", "c"];

const alphaNumericArr = arrNums1.concat(arrLetters1);

console.log(alphaNumericArr, arrNums1, arrLetters1);

/* includes */
const namesArr = ["Levent", "Recep", "Engin", "Gülsu"];

console.log( namesArr.includes("Levent") );




/* indexOf */

const namesArr2 = ["Levent", "Recep", "Engin", "Gülsu"];

console.log( namesArr2.indexOf("Burak") ); //-1

// namesArr2.indexOf("Burak") !== -1;






/* lastIndexOf */
const namesArr3 = ["Levent", "Recep", "Engin", "Levent", "Gülsu"];

console.log( namesArr3.lastIndexOf("Levent") );  //3;



/* reverse */
const prices = [ 100, 250, 300, 1200 ];

const reversedPrices = prices.reverse(); //mutates the original array

console.log(reversedPrices, prices);



/* join */
const userFavoriteColors = ["blue", "violet", "yellow"];


console.log( userFavoriteColors.join(" *** ") );


const outputMessage = `Kullanıcımızın sevdiği renkler ${ userFavoriteColors.join(" *** ") }`;

document.body.innerHTML = outputMessage;

/*  splice mutates the original array */

const nums = [1,3,5, 8];

//remove
console.log( nums.splice(0, 2), nums  ); //[5,8]

//remove items and add new items
console.log( nums.splice(0,2, "545", "333"), nums );


/* slice */

const nums2 = [1,2,3,4,5,6,7];

console.log( nums2.slice(-4), nums2 );

console.log( nums2.slice(0), nums2 );

const copiedNums = nums2.slice(0);

copiedNums.push(1550);

console.log(copiedNums, nums2)

