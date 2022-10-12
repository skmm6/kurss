/*
// let country = 'Ru'
// let continent = 'evrazia'
let population = 160

// console.log(country, continent, population);


// let isIsland = false;

// let language;

// console.log(typeof isIsland);
console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


let language = 'RU';
const country = 'Ru';
let continent = 'evrazia';
const isIsland = false;
// isIsland = true; 

// population = population / 2
console.log(population);
population++
console.log(population);
const finland = 6
console.log(population > finland);
console.log(population < 33);

// let description = country + ' ' + 'is in' + ' ' + continent + ', and its' + ' ' + population + ' ' + 'million people speak' + ' ' + language
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

console.log(`++++++++++++++++++quest 1+++++++++++++`)
const kgMarks = 78
const kgJohn = 92
const mMarks = 1.69
const mJohn = 1.95

let bmiMarks = kgMarks / mMarks**2
let bmiJohn = kgJohn / mJohn**2
console.log(bmiMarks, bmiJohn);
let markHigherBMI = bmiMarks > bmiJohn
console.log(markHigherBMI);

const kgMarks2 = 95
const kgJohn2 = 85
const mMarks2 = 1.88
const mJohn2 = 1.76

let bmiMarks2 = kgMarks2 / mMarks2**2
let bmiJohn2 = kgJohn2 / mJohn2**2
console.log(bmiMarks2, bmiJohn2);
let markHigherBMI2 = bmiMarks2 > bmiJohn2
console.log(markHigherBMI2);


console.log(`++++++++++++++++++quest 1+++++++++++++`)


let population = 33;

let populationAverage;
if(population >= 33) {
   console.log(`Население Португалии выше среднего`); 
} else {
    populationAverage = 33 - population
    console.log(`Население Португалии на ${populationAverage} миллиона ниже среднего`);
}



console.log(`++++++++++++++++++quest 2+++++++++++++`)
const kgMarks = 78
const kgJohn = 92
const mMarks = 1.69
const mJohn = 1.95

let bmiMarks = kgMarks / mMarks**2
let bmiJohn = kgJohn / mJohn**2
console.log(bmiMarks, bmiJohn);
console.log(markHigherBMI);

if(bmiMarks > bmiJohn) {
    console.log(`У Марка ИМТ ${bmiMarks} выше, чем у Джона ${bmiJohn}!`);
} else {
    console.log(`У Джона ИМТ ${bmiJohn} выше, чем у Марка ${bmiMarks}`);
}


console.log(`++++++++++++++++++quest 2+++++++++++++`)


console.log('9' - '5');  //4
console.log('19' - '13' + '17'); 
console.log('19' - '13' + 17); 
console.log('123' < 57); 
console.log(5 + 6 + '4' + 9 - 4 - 2); 
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143



let numNeighbours = Number(prompt('Сколько соседних стран у вашей страны?'))

if(numNeighbours === 1) {
    console.log('Только 1 граница');
} else if(numNeighbours > 1) {
    console.log('Более 1 гранциы');
} else {
    console.log('No borders');
}


const county = 'Ru'
const language = "Ru"
const population = 160
const isIsland = false

if(language === 'Ru' && population > 50 && !isIsland) {
    console.log('Вы должны жить в Португалии :)');
} else {
    console.log('Португаля не соотвествует вашим критериям :(');
}



console.log(`++++++++++++++++++quest 3+++++++++++++`)

// const dolphinsMidlBal = (96 + 108 + 89) / 3;
// const koalasMidlBal = (88 + 91 + 110) / 3;

// console.log(dolphinsMidlBal, koalasMidlBal);

// if(dolphinsMidlBal > koalasMidlBal) {
//     console.log(`Победили Дельфины`);
// } else if(dolphinsMidlBal === koalasMidlBal) {
//     console.log(`Победила дружба`);
// } else {
//     console.log(`Победили Коалы`);
// }

const dolphinsMidlBal = (97 + 112 + 101) / 3;
const koalasMidlBal = (109 + 95 + 106) / 3;
// const dolphinsMidlBal = 1000;
// const koalasMidlBal = 1000;

console.log(dolphinsMidlBal, koalasMidlBal);

if(dolphinsMidlBal > koalasMidlBal && dolphinsMidlBal >= 100) {
    console.log(`Победили Дельфины`);
} else if(dolphinsMidlBal === koalasMidlBal && koalasMidlBal >= 100 && dolphinsMidlBal >= 100) {
    console.log(`Победила дружба`);
} else if(koalasMidlBal >= 100){
    console.log(`Победили Коалы`);
} else {
    console.log(`Никто не победил`);
}



console.log(`++++++++++++++++++quest 3+++++++++++++`)


const language = 'english'

switch (language) {
    case 'chinese':
    case 'mandarin':
     console.log('MOST number of native speakers!');
     break;
    case 'spanish':
     console.log('2nd place in number of native speakers'
     );
     break;
    case 'english':
     console.log( '3rd place'
     );
     break;
    case 'hindi':
     console.log('Number 4');
     break;
    case 'arabic':
     console.log('5th most spoken language');
     break;
    default:
     console.log('Great language too :D');
}



const population = 160

console.log(`Население Португалии ${population >= 33 ? 'выше' : 'ниже' } среднего`);


console.log(`++++++++++++++++++quest 4+++++++++++++`)

const values = 275;

const tip = values >= 50 && values <= 300 ? values * 0.15 : values * 0.2;

const summ = values + tip;

console.log(`The bill was ${values}, the tip was ${tip}, and the total value
${summ}`);




console.log(`++++++++++++++++++quest 4+++++++++++++`)

*/