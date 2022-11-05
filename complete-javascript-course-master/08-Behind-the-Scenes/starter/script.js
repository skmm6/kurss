'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2010) {
      var zumer = true;
      // Creating NEw variable with same name as outer scopes variable
      const firstName = 'Steven';

      //  переназначение внешних перменных
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a zumer, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(zumer);
    // console.log(add(2, 3));
    console.log(output);
  }
  //   console.log(str);
  printAge();

  return age;
}

const firstName = 'Egor';
calcAge(2000);
// console.log(age);
// printAge();
