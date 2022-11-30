'use strict';

// СТРОКИ  PART 1==============================TODO
/*
const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('portugal'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E средние места
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log('Твоем место по середине оно не нужно никому 😒');
  else console.log('Это хорошее место😊');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/
// СТРОКИ  PART 2==============================TODO
const airLine = 'TAP Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Заглавная буква
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//  Проверь электронную почку (сравнение)

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '228,97$';
const priceUS = priceGB.replace('$', 'R').replace(',', '.');
console.log(priceUS);

const announcement =
  'Все пассажиры подходят к выходу на посадку 23. выходу на посадку 23!';

console.log(announcement.replace('выходу', 'входу'));
console.log(announcement.replaceAll('выходу', 'входу'));

console.log(announcement.replaceAll(/выходу/g, 'входу'));

// Bolleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Крч успешно прошло условие');
}

// Практический опыт
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Get some snacks and a gun for protection');

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // открыт 24 часа
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // es 6 расширенные литералы
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Заказ получен! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Твоя вкусная паст из ${ing1}, ${ing2} и ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};




//MAPS итерации TODO
const question = new Map([
  ['question', 'Какой самый лучший язык программирования в мире?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Фактически преобразуем объект в картуTODO
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Приложение викторинаTODO
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Преобразуем карту в массив
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// MAP TODO 

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :( ');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


// МНОЖЕТВА TODO

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Пример  TODO
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);


// Пербор циклы не итеративныйTODO

// Название объектовTODO
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `Мы открыты ${properties.length} дня:`;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);
// Значение объекта
const values = Object.values(openingHours);
console.log(values);

// Зацыкливание на объектье
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`В ${day} откроется в ${open} и закроется в ${close}`);
}


// Опциональная цепочка
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//дополнительная цепочка
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// методы
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Массивы;

const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

// const users = [];

console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');



// Цикл for of для переборки массива 

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());

// Логичский оператор объеденения

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// OR оператор присваивания
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//  оператор нулевого присваивания ( null или undefind)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND оператор присваивания
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// операторы

// restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Нулевые значения: null и undefined (не 0 или '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('--------- OR ----------');
// Любой тип данных, возвращать любой тип данных - оценка коротного замыкания (если первое значение истенное оно вернет первое значение)
// оператор или
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('--------- AND ----------');
// оператор и
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('hello' && 23 && null && 'Jonas');

//  Практическое задание
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//

// 1) Деструктурированние
// шаблон rest
// Разверни, с правой стороны опреатор присваивания
const arr = [1, 2, ...[3, 4]];

// REST , потмоу что с левой стороны знак =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// ОБЪЕКТЫ
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Функции
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'spinach');
restaurant.orderPizza('mushrooms');


////////////////////////////////////////////////////////////
// оператор распространения
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Копирование массива
const mainMenuCopy = [...restaurant.mainMenu];

// Соедените 2 массива
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// итеравтивный обхекты это строки карты множества но не объекты.

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtman `);

const ingredients = [
  // prompt("let's make pasta! Ingridient 1?"),
  // prompt("let's make pasta! Ingridient 2?"),
  // prompt("let's make pasta! Ingridient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// объект
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// денструкция объектов

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  tarterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// мутирующие переменные
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//  вложенные объекты
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// переключител переменных
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// возврощаемые значения от функции
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Вложенное дискрутурированние
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// только значение по умолчанию
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
