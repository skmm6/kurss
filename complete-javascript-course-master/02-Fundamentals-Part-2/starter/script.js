'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive:D');

// const interface = 'audio';
// const private = 534;


function logger() {
    console.log('My name is Jonas');
}
// calling / running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);


// FUnction declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)

// FUNCTION expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirment =  (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retiremment = 65 - age;
    return `${firstName} уходит на пенсию через ${retiremment} лет`
}

console.log(yearsUntilRetirment(1991, 'Рома'));
console.log(yearsUntilRetirment(1980, 'Боб'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piese of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); 



const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirment =  function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retiremment = 65 - age;

    if(retiremment > 0) {
        console.log(`${firstName} уходит на пенсию через ${retiremment} лет`);
        return retiremment;
    } else {
        console.log(`${firstName} has already retired 🎺🎺🎺🎺`);
        return -1;
    }
}

console.log(yearsUntilRetirment(1991, 'Jonas')); 
console.log(yearsUntilRetirment(1950, 'Егор')); 



const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 =calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 =calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);



const friends = ['Micheal', 'Steven', 'Peter'];



// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); 
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('You have friend called Peter');
}

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

ОБЪЕКТЫ ============================ОБЪЕКТЫ=============ОБЪЕКТЫ=============ОБЪЕКТЫ=================================================

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); не работает

const interestedIN = prompt('What do you want to know about Jonas? Choose between firstName, LastName, age, job, and friends')

if(jonas[interestedIN]) {
    console.log(jonas[interestedIN]);
} else {
    console.log('Wrong request! Choose between firstName, LastName, age, job, and friends'); 
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

// chalendge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is 
called ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));



console.log(jonas.getSummary());


// ======================== ЦИКЛЫ ============================
// console.log('Lifting wights repetition 1 🏋️');
// console.log('Lifting wights repetition 2 🏋️');
// console.log('Lifting wights repetition 3 🏋️');
// console.log('Lifting wights repetition 4 🏋️');
// console.log('Lifting wights repetition 5 🏋️');
// console.log('Lifting wights repetition 6 🏋️');


// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting wights repetition ${rep} 🏋️`);
}



const jonas = [
    'Jonas',
    'Schmedtman',
     2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// .
// .
// .
// .
// console.log(jonas[4]);
// Jonas[5] does not exist

for(let i = 0; i < jonas.length ; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i]

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`---- ONLY STRING -----`);
for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`---- BREAK WITH NUMBER -----`);
for(let i = 0; i < jonas.length ; i++) {
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

*/