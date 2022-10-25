// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(2000));

// const words = ['hello', 'world', 'this', 'is', 'great'];

// const smash = function (arr) {
//   let sentence = ``;
//   for (let i = 0; i < arr.length; i++) {
//     sentence += i === arr.length - 1 ? `${arr[i]}` + `.` : `${arr[i]}` + ` `;
//   }
//   return sentence;
// };

// smash(words);

// const smash = function (word) {
//   let sentence = ``;
//   console.log(word.lenght);
//   for (let i = 0; i < word.lenght; i++) {
//     sentence += `${word[i]}`;
//     console.log(sentence);
//   }

//   console.log(sentence);
//   //   return sentence;
// };

// smash(1);
// TODO задача 1
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// TODO задача 2

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX
    // value: Number(prompt('Degrees celsius: ')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//  A) identyfy
console.log(measureKelvin());

// USing a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//  A) identyfy
console.log(amplitudeBug);


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// TODO вариант мой
// const printForecast = function (arr) {
//   const strings = [];
//   for (let i = 0; i < arr.length; i++) {
//     const string = `${arr[i]}ºC через ${i + 1} день`;
//     strings.push(string);
//   }
//   return strings.join('...');
// };

// TODO вариант второй
const printForecast = function (arr) {
  let strings = '';
  for (let i = 0; i < arr.length; i++) {
    strings += `${arr[i]}ºC через ${i + 1} день ... `;
  }
  console.log('...' + strings);
};

printForecast(data1);


// var countSheep = function (num) {
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };

// console.log(countSheep(0));

const data = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle(data));


function sumMix(x) {
  let summ = 0;
  for (let i = 0; i < x.length; i++) {
    summ += Number(x[i]);
  }
  return Number(summ);
}
console.log(typeof 3);
console.log(typeof '3');
const arr = [12, 3, 2, 9, '1', 3];

console.log(sumMix(arr));
*/
function descendingOrder(n) {
  console.log(parseInt(String(n).split('').sort().reverse().join('')));
  return parseInt(String(n).split('').sort().reverse().join(''));
}

descendingOrder(67453298532764213);
