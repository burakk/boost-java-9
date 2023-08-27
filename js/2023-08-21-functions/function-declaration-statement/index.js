function sayHi(p1, p2) {
  //return undefined;
}

console.log(sayHi());

function calculateTotal(p1, p2) {
  const res = p1 + p2;

  return res;
}

// argument1 - 20, argument2 - 450
calculateTotal(20, 450);

function greet(name, greetingWord) {
  if (!greetingWord) {
    greetingWord = "Selams";
  }
  console.log(name, greetingWord);
  return `${greetingWord}, name`;
}

greet("Burak");

//default function parameter values

function superGreeter(name, greetingWord = "Merhabalar") {
  console.log(name, greetingWord);

  return name + greetingWord;
}

superGreeter("Deniz");
