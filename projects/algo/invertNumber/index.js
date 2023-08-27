/* invert number */

// 23 -> 32
// 645 -> 546
// -1200, -21

let num  = 123;

let numStr = 123 + "";  //num.toString();

const numStrArr = numStr.split(""); // ["1", "2", "3"];

const reversedNum = parseInt( numStrArr.reverse().join("") );


["b", "c", "e"].join("") // "bce"


//Math.sign( -1 );

const nmbr2 = -123;

function backwards(number) {

    let numberStr = number.toString();

    let sign = Math.sign(number);


    const backwardsNumStr = numberStr.split("").reduce((acc, currentNum) => currentNum + acc);

 

    return parseInt(backwardsNumStr)*sign;

}

 

console.log(backwards(nmbr2));




// ****


function reverseNumbers(num) {

    let newNum = 0;

    if (num > 0) {

        while (num > 10) {

            newNum += num % 10

 

            num /= 10

            num = Math.floor(num);

            newNum *= 10

        }

        return newNum + num

    } else {

        num*=-1;

        while (num > 10) {

            newNum += num % 10

 

            num /= 10

            num = Math.floor(num);

            newNum *= 10

        }

        return (newNum + num)*-1;

    }

   

}


function reverseNumbers2(num) {

    let newNum = 0;

    let sign = Math.sign(num)

    num*= sign;

    if (num > 0) {

        while (num > 10) {

            newNum += num % 10

 

            num /= 10

            num = Math.floor(num);

            newNum *= 10

        }

        return (newNum + num) * sign

    }

   

}








