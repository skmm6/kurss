'use strict';
/*
//////////////////////////////////////////////////
//208 Constructor Functions and the new Operator TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  // Свойства экземпляра
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never to this плохая практика не делай так
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//  1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function auto return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jack instanceof Person);

//////////////////////////////////////////////////
//209 Prototypes TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jack.calcAge();
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('spacies'));

//////////////////////////////////////////////////
//211 Prototypal Inheritance on Built In Objects TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////
console.log(jonas.__proto__);
// object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [
  2, 6, 4, 5, 6, 9, 3, 3, 3, 3, 3, 3, 6, 11, 11, 12, 13, 12, 13, 15, 6, 2, 100,
]; // new Array []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
// не стоит этого делать :D

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
//////////////////////////////////////////////////
//212 Coding Challenge #1 TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
};

const myCar = new Car('BMW', 120);
console.log(myCar);
myCar.accelerate();
myCar.brake();
myCar.brake();
myCar.accelerate();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
