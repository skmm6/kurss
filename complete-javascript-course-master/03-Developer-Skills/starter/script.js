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
