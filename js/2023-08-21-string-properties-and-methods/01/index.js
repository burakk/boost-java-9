/* length property */
const theString = "Merhaba, dünya!";

const theStringLength = theString.length;

console.log(theStringLength);

/* toUpperCase method */
const allUpper = theString.toUpperCase();

/* toLowerCase method */
const allLower = theString.toLowerCase();

/* trim method */

const userName = "   Burak ";

const trimmedUserName = userName.trim();

console.log(userName);
console.log(trimmedUserName);

/* includes method */
const hasLetterX = theString.includes("A"); //false

/*  indexOf method  */
const userAddress = "Kadıköy Caferağa Mah. No:12, Rıhtım.";

const dotIndex = userAddress.indexOf(".");

/*  lastIndexOf method  */

const dotLastIndex = userAddress.lastIndexOf(".");

console.log(dotIndex, dotLastIndex);

/* slice */
const cherryCake = "1.dilim, 2.dilim, 3.dilim";

const firstSlice = cherryCake.slice(0, 7);

const secondSlice = cherryCake.slice(9);

const thirdSlice = cherryCake.slice(-7, -5);

console.log(firstSlice, "\n", secondSlice, "\n", thirdSlice);

/* replace */
const theString2 = "Bu karenin kenar  uzunlukları 2mm'dir. ";

const unitCorrectedString = theString2.replace("mm", "cm");

console.log(unitCorrectedString);

/* replace all*/

const theString3 = " Bu dörtgenin kısa kenarı 3mm, uzun kenarı 4mm'dir.";

const unitsCorrectedStr = theString3.replaceAll("mm", "cm");

console.log(unitsCorrectedStr);

const unitsCorrectedStr2 = theString3.replace(/mm/g, "cm");

/* split  */

const userIds = "12, 34, 56, 78, 93";

const userIdsArr = userIds.split(", ");

console.log(userIdsArr);
