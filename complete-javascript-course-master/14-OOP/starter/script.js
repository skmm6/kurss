'use strict';

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
