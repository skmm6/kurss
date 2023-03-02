'use strict';

//////////////////////////////////////////////////
//208 Constructor Functions and the new Operator TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Свойства экземпляра
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never to this плохая практика не делай так
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// //  1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function auto return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jack instanceof Person);

// Person.hey = function () {
//   console.log('hey there 👌👌👌👌');
//   console.log(this);
// };
// Person.hey();

//////////////////////////////////////////////////
//209 Prototypes TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jack.calcAge();
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('spacies'));
/*
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
/*
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

//////////////////////////////////////////////////
//213 ES6 Classes TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////

//  class expression
// const PersonCl = class {};

//  class declaration
class PersonCl {
  constructor(fullName, birtYear) {
    this.fullName = fullName;
    this.birtYear = birtYear;
  }

  // все экземапляры имен будут иметь свойство прототипа
  //  methods will be added to .prototype property
  calcAge() {
    const data = new Date();
    const years = data.getFullYear();
    console.log(years - this.birtYear);
  }

  greet() {
    console.log(`Привет ${this.firstName}`);
  }

  get age() {
    const data = new Date();
    const years = data.getFullYear();
    return years - this.birtYear;
  }

  // каждый аз когда мы пытаемся установить свойство которые уе существует
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} не полное имя`);
  }

  get fullname() {
    return this._fullName;
  }

  // Статический метод никто кроме класса не будут иметь доступ к прототипу
  static hey() {
    console.log('hey there 👌👌👌👌');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
const egor = new PersonCl('Egor', 2000);
console.log(egor);

egor.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Привет ${this.firstName}`);
// };

egor.greet();

//  1. Classes are not hoisted (нельзя использовать пока не объявили то есть выше коа)
// 2. Class are first-class citizes мы можем передавать их в функцию и возвращать из функции
// 3. Classes всегда работают в строгом режиме.
//////////////////////////////////////////////////
//214 Setters and Getters TODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

//////////////////////////////////////////////////
//214 Setters and GettersTODOTODOTODOTODOTODOTODO
//////////////////////////////////////////////////
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account);

console.log(egor.age);

//////////////////////////////////////////////////
//215 Static Methods TODOTODOTODOTODO
//////////////////////////////////////////////////

//////////////////////////////////////////////////
//216 Object create TODOTODOTODOTODO
//////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    const data = new Date();
    const years = data.getFullYear();
    console.log(years - this.birtYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birtYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birtYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah);

//////////////////////////////////////////////////
//217 Coding Challenge #2TODOTODOTODOTODO
//////////////////////////////////////////////////

class Circle {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new Circle('BMW', 120);
console.log(bmw.speedUS);
console.log(bmw);
bmw.accelerate();
bmw.brake();

bmw.speedUS = 50;
console.log(bmw);

//////////////////////////////////////////////////
//218 Inheritance Between Classes Constructor Functions TODOTODOTODOTODO
//////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, cource) {
  Person.call(this, firstName, birthYear);
  this.cource = cource;
};

// связываем прототипы
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.cource}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//////////////////////////////////////////////////
//219 Coding Challenge #3 TODOTODOTODOTODO
//////////////////////////////////////////////////
// Car

const ElectricCar = function (make, speed, chargeproperty) {
  Car.call(this, make, speed);
  this.chargeproperty = chargeproperty;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBat = function (num) {
  this.chargeproperty += num;
  console.log(`Зарядить до ${this.chargeproperty}%`);
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.chargeproperty -= 1;
  console.log(`${this.make} едет со скоростью ${this.speed}
  км/ч, заряд ${this.chargeproperty}%`);
};

const tesla = new ElectricCar('Teslas', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.accelerate();
tesla.chargeBat(50);
tesla.chargeBat(20);

// accelerate
// brake


//////////////////////////////////////////////////
//220 Inheritance Between Classes ES6 ClassesTODOTODOTODOTODO
//////////////////////////////////////////////////
class PersonCl {
  constructor(fullName, birtYear) {
    this.fullName = fullName;
    this.birtYear = birtYear;
  }

  // все экземапляры имен будут иметь свойство прототипа
  //  methods will be added to .prototype property
  calcAge() {
    const data = new Date();
    const years = data.getFullYear();
    console.log(years - this.birtYear);
  }

  greet() {
    console.log(`Привет ${this.firstName}`);
  }

  get age() {
    const data = new Date();
    const years = data.getFullYear();
    return years - this.birtYear;
  }

  // каждый аз когда мы пытаемся установить свойство которые уе существует
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} не полное имя`);
  }

  get fullname() {
    return this._fullName;
  }

  // Статический метод никто кроме класса не будут иметь доступ к прототипу
  static hey() {
    console.log('hey there 👌👌👌👌');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birtYear, cource) {
    //  В первую очередь
    super(fullName, birtYear);
    this.cource = cource;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.cource}`);
  }

  calcAge() {
    console.log(
      `i am ${2037 - this.birtYear} years но  чувствую себя old ${
        2037 - this.birtYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Marta Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


//////////////////////////////////////////////////
//221 Inheritance Between Classes Object createTODOTODOTODOTODO
//////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudenstProto = Object.create(PersonProto);
StudenstProto.init = function (firstName, birthYear, cource) {
  PersonProto.init.call(this, firstName, birthYear);
  this.cource = cource;
};

StudenstProto.introduce = function () {
  console.log(`Меня зовут ${this.firstName} и я студент ${this.cource}`);
};

const jay = Object.create(StudenstProto);
jay.init('Jay', 2010, 'Compuetr Science');
jay.introduce();
jay.calcAge();


//////////////////////////////////////////////////
//22 Another Class ExampleTODOTODOTODOTODO
//////////////////////////////////////////////////

// 1)Публичные поля
// 2)Частные поля
// 3)Публичные методы
// 4)Частные методы
// есть еще стратик версия

class Account {
  // 1) публичные поля (экземпляры)
  locale = navigator.language;

  // 2)чатсные(приватные) поля
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // защищенной собственностью
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Спасибо что открыл учетную запись  ${owner}`);
  }

  // 3) публичные методы
  // публичный интрефейс
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Кредит одобрен');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4)Частные методы
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// в место
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();

// не получаем доступ к чатсным полям
// console.log(acc1.#movements);
// console.log(acc.#pin);
// console.log(acc1.#approveLoan);

//////////////////////////////////////////////////
//225 Chaining MethodsTODOTODOTODOTODO
//////////////////////////////////////////////////

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
    return this;
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`Машина: ${this.make} текущая скорость ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBat(num) {
    console.log(`Зарядить до ${this.#charge}%`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} едет со скоростью ${this.speed}
  км/ч, заряд ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBat(50)
  .accelerate();

console.log(rivian.speedUS);
