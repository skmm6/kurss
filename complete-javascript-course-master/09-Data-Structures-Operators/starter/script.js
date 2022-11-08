'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//  Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart;

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All product deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// THIS 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️

// console.log(this);

const calcAge = function (birtYear) {
  console.log(2037 - birtYear);
  // console.log(this);
};

calcAge(1991);

const calcAgeArrow = birtYear => {
  console.log(2037 - birtYear);
  // console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// THIS 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️ 🏋️‍♂️

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Решение 1
    // const self = this; // self of that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Решение 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
*/

// Primiriv types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//  Reference typec
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage`, jessica);
console.log(`After marriage`, marriedJessica);

// marriedJessica = {};

//  Coping bject
// TODO

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessicaCopy);
