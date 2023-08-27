function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

f1();
//database
f2();
f3();

// f1, f2, f3
const theBtnEl = document.getElementById("theBtn");

theBtnEl.addEventListener("click", function () {
  console.log("clicked");
});

function main() {
  console.log("main");
}

main();

function testingAsync() {
  setTimeout(() => {
    console.log("I am from the future 1");
  }, 0);

  setTimeout(() => {
    console.log("I am from the future 2");
  }, 0);

  new Promise((resolve, reject) => {
    resolve("Hi I am the resolved one");
  }).then((msg)=>{ console.log(msg)});

  console.log("hi there!");
}

testingAsync();
