const myObj = {
  x: 3,
  y: 4,
};

firstProto = Object.getPrototypeOf(myObj);
lastProto = Object.getPrototypeOf(firstProto);

console.log(firstProto, lastProto);

function User(name, id) {
  this.name = name;
  this.id = id;
}

User.prototype.sayHi = function () {
  console.log(this.name + " selamlar...");
};

const user1 = new User("Burak", "Kuyucaklı");
const user2 = new User("Deneme", "Test");

user1.sayHi();



// console.log(  user1.__proto__.__proto__.__proto__ );


const myDate = new Date();

console.log( myDate.__proto__.__proto__.__proto__)



// null > obj > Personel > Mühendis 