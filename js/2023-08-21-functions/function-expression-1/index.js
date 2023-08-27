//Anoymous function expressions ---- callback function, 
const superGreeter = function (name, greetingWord = "Merhabalar efenims...") {
  return name + ", " + greetingWord;
};

console.log(superGreeter("Burak"));



/* 

btnEl.addEventListener( "click",  handleClick  );

function handleClick( e ){  }




btnEl.addEventListener( "click",  function(e){ }  );

*/


// Odd even number checker anonymous function expression  



const oddEvenNumberChecker = function (p1){

  return p1%2 ? "odd":"even";
  

}

var checkOddEven = function(number) {

  if (number % 2 == 0) {

      return "Even";

  } else {

      return "Odd";

  }

};


const oddNumber = function(number){

  return number % 2 ? "It's an odd number." : "It's an even number."

}


const oddoreven=function (sayi){

  return sayi%2 ?"odd":"even"
  
  }