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



console.log(`++++++++++++++++++часть 2+++++++++++++`)


function describeCounty(county, population, capitalCity){
    const countyInfo = `Население ${county} составляет ${population} миллионов человек а ее,столицей является ${capitalCity}.`
    return countyInfo;
}

console.log(describeCounty('Финляндии', '6', 'Хельсинки'));
console.log(describeCounty('России', '160', 'Москва'));
console.log(describeCounty('Белорусии', '30', 'Минск'));



function percentageOfWorld1(population){
    return `В вашей стране проживает ${population} миллионов человек, то есть это около ${population / 7900 * 100}% мирового населения`
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(160));
console.log(percentageOfWorld1(6));

const percentageOfWorld2 = function(population) {
    return `В.2: В вашей стране проживает ${population} миллионов человек, то есть это около ${population / 7900 * 100}% мирового населения`
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(160));
console.log(percentageOfWorld2(6));



const percentageofworld3 = population => `В.2: В вашей стране проживает ${population} миллионов человек, то есть это около ${population / 7900 * 100}% мирового населения`

console.log(percentageofworld3(1441));


function percentageOfWorld1(population){
    return population / 7900 * 100;
}

const describePopulation = function(country, population) {
    const populationProcent =  percentageOfWorld1(population);

    return `В ${country} проживает ${population} миллион челвоек,что состовляет около ${populationProcent}% населения мира.`
}

console.log(describePopulation('России', 160));
console.log(describePopulation('Китай', 1441));
console.log(describePopulation('США', 332));


console.log(`++++++++++++++++++quest 5+++++++++++++`)

const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

// const avgDolhins = calcAverage(85, 54, 41)
// const avgKoalas = calcAverage(23, 34, 27)

let scoreDolhins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = function(avgDolhins, avgKoalas){
    if(avgDolhins >= 2 * avgKoalas) {
        return `Победили Дельфины со счетом ${avgDolhins} против ${avgKoalas}`
    } else if(avgKoalas >= 2 * avgDolhins){
        return `Победили Коалы со счетом ${avgDolhins} против ${avgKoalas}`
    }else {
        return `Ничья со счетом ${avgDolhins} против ${avgKoalas}`
    }
}
console.log(checkWinner(scoreDolhins, scoreKoalas));
 //test 2 
 scoreDolhins = calcAverage(85, 54, 41)
 scoreKoalas = calcAverage(23, 34, 27)
 console.log(checkWinner(scoreDolhins, scoreKoalas));



console.log(`++++++++++++++++++quest 5+++++++++++++`)




const populations = [160, 1441, 6, 30];
console.log(populations.length === 4);

const percentageOfWorld = function(population){
    return population / 7900 * 100;
}

const percentages = [
    percentageOfWorld(populations[0]), 
    percentageOfWorld(populations[1]), 
    percentageOfWorld(populations[2]), 
    percentageOfWorld(populations[3])
]

console.log(percentages);



const neighbours = ['Россия', 'Казахстан', 'Белорусь'];
console.log(neighbours);

neighbours.push('Utopia')
console.log(neighbours);

neighbours.pop('Utopia')
console.log(neighbours);

if(!neighbours.includes('Германия')){
    console.log('Это не центральноевропейская страна :D');
}

const indexCount = neighbours.indexOf('Белорусь')
neighbours[indexCount] = 'Респубилка Белорусь'
console.log(neighbours);


console.log(`++++++++++++++++++quest 6+++++++++++++`)

const bills = [125, 555, 44]

const calcTip = schet => {
    // return schet >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    if(schet >= 50 & schet <= 300){
        const summ = schet * 0.15
        return summ
    } else {
        const summ = schet * 0.2
        return summ
    }
}
const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]),bills[2] + calcTip(bills[2])]

console.log(tips);
console.log(total);


console.log(`++++++++++++++++++quest 6+++++++++++++`)

ЛЕКЦИЯ Введение в объекты




const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russia",
    population: 150,
    neighbours: ['Ukrain', 'Belorus'],
}




const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russia",
    population: 150,
    neighbours: ['Ukrain', 'Belorus'],
}

console.log(`В ${myCountry.country} ${myCountry.population} милионов ${myCountry.language}язычных людей, ${myCountry.neighbours.length} соседние страны и столица ${myCountry.capital}`);


myCountry.population += 2;
console.log(myCountry.population);


myCountry['population'] -= 2;
console.log(myCountry.population);



// =========================================== Лекция объекты методы

const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russia",
    population: 150,
    neighbours: ['Ukrain', 'Belorus'],
    describe: function() {
        return `В ${this.country} ${this.population} милионов ${this.language}язычных людей, ${this.neighbours.length} соседние страны и столица ${this.capital}`
    },
    checkIsland: function() {
        this.hasNeighbours = this.neighbours === [] ? false : true;
        return this.hasNeighbours
    },
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);

console.log(`++++++++++++++++++quest 7+++++++++++++`)


const Marks = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        this.bmi = this.bmi.toFixed(2)
        this.bmi = `(${this.bmi})`
        return this.bmi
    },
}

const Johns = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        this.bmi = this.bmi.toFixed(2)
        this.bmi = `(${this.bmi})`
        return this.bmi
    },
}


console.log(Johns.calcBMI(),
Marks.calcBMI());


console.log(`ИМТ ${Marks.bmi > Johns.bmi ? Marks.name + Marks.bmi : Johns.name + Johns.bmi} выше чем у ${Marks.bmi < Johns.bmi ? Marks.name + Marks.bmi : Johns.name + Johns.bmi}`);

console.log(`++++++++++++++++++quest 7+++++++++++++`)
// ЦИКЛЫ=================================================ЦИКЛЫ========================
*/

for (let num = 1; num <= 50; num++) {
    console.log(`Изберательный номер ${num} в данный момент голосует`);
}