/* Callback functions are functions passed as an argument to another function */

function emergency(callback) {
  callback();
}

function callThePolice() {
  //Statement1
  //Statement2
  console.log("calling the police");
}

function callMyDoctor() {
  //Statement1
  //Statement2
  console.log("calling your doctor");
}

emergency(callMyDoctor);
emergency(callThePolice);

const callMyLove = function () {
  console.log("calling your love...");
};

emergency(callMyLove);

const callMyAunt = () => {
  console.log("calling your aunt");
};

emergency(callMyAunt);

emergency(() => {
  console.log("calling your brother...");
});

emergency(function () {
  console.log("calling your sister...");
});

//DOM handler functions

document.addEventListener("click", handleClick);

function handleClick(e) {
  console.log("clicked");
}


document.addEventListener("click", ()=>{ console.log("Clicked") })



