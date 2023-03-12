'use strict';

///////////////////////////////////////
//248 Welcome to Callback Hell TODO
/////////////////////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('russia');
1getCountryData('belorus');
*/
///////////////////////////////////////
//250 Welcome to Callback Hell TODO
/////////////////////////////////////////

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Визуализировать 1 страну
    renderCountry(data);

    // соседняя страна (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};
/*
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('russia');
/*
setTimeout(() => {
  console.log('1 second');
  setTimeout(() => {
    console.log('2 second');
    setTimeout(() => {
      console.log('3 second');
      setTimeout(() => {
        console.log('4 second');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////
//251 Promises and the Fetch API TODO
/////////////////////////////////////////

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

///////////////////////////////////////
//252 Consuming Promises TODO
/////////////////////////////////////////
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

///////////////////////////////////////
//254 Handling Rejected Promises TODO
//255 Throwing Errors Manually TODO
/////////////////////////////////////////

const getJSON = function (url, errrMsg = 'Что то пошло не так') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errrMsg} ${response.status}`);
    }

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Страны не найденно ${response.status}`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'dqwdq';

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Страны не найденно ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} ⛔⛔⛔⛔`);
//       renderError(`Something went wrong ⛔⛔⛔⛔ ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Страны не найденно`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('Нет соседа страны!');

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Страны не найденно`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} ⛔⛔⛔⛔`);
      renderError(`Something went wrong ⛔⛔⛔⛔ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
/*
btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('germany');

getCountryData('australia');
*/
///////////////////////////////////////
//256 Coding Challenge #1 TODO
/////////////////////////////////////////
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?json=1&auth=857843556283788658878x96199`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Ошибка много запросов ${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`Вы находитесь в ${data.city}, ${data.country}`);

      return getJSON(
        `https://restcountries.com/v2/name/${data.country}`,
        `Страны не найденно`
      ); // собственная функция с прошлой лекции getJson
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('Нет соседа страны!');

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Страны не найденно`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .then(data => console.log(data.standard.countryname))
    .catch(err => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
*/

///////////////////////////////////////
//258 The Event Loop in Practice TODO
/////////////////////////////////////////
/*
console.log('Test start');
setTimeout(() => console.log('0 Sec timer'), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));

Promise.resolve('Resolved pro,ise 2').then(res => {
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});

console.log('the end');
*/

///////////////////////////////////////
//258 Building a Simple Promisee TODO
/////////////////////////////////////////
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Крутите барабан 🔮🔮🔮🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN🤑');
    } else {
      reject(new Error('You lost your money 💩💩💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifing setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second');
    return wait(1);
  })
  .then(() => {
    console.log('2 second');
    return wait(1);
  })
  .then(() => {
    console.log('3 second');
    return wait(1);
  })
  .then(() => {
    console.log('4 second');
    return wait(1);
  })
  .then(() => console.log('Я ждал 5 сек'));

// в место
// setTimeout(() => {
//   console.log('1 second');
//   setTimeout(() => {
//     console.log('2 second');
//     setTimeout(() => {
//       console.log('3 second');
//       setTimeout(() => {
//         console.log('4 second');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('adc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
/*
// ////////////////////////////////////////////////////////
//Promisifing the Geo API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?json=1&auth=857843556283788658878x96199`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Ошибка много запросов ${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`Вы находитесь в ${data.city}, ${data.country}`);

      return getJSON(
        `https://restcountries.com/v2/name/${data.country}`,
        `Страны не найденно`
      ); // собственная функция с прошлой лекции getJson
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('Нет соседа страны!');

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Страны не найденно`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .then(data => console.log(data.standard.countryname))
    .catch(err => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
//261 Coding Challenge #2 TODO
/////////////////////////////////////////
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Изображение не найденно'));
    });
  });
};

let currentImg;

createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('загрузил 1 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Загрузил 2 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Загрузил 3 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

///////////////////////////////////////
//262 Consuming Promises with Async Await TODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO
/////////////////////////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );
// // Тоже самое

const whereAmI = async function () {
  try {
    // Геолокация
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Обратное геокодирование
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?json=1&auth=857843556283788658878x96199`
    );
    if (!resGeo.ok) throw new Error('Проблема в геолокации данные');

    const dataGeo = await resGeo.json();

    // Дата страны
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Проблема в  данные страны');

    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💩`);
    renderError(` 💩 ${err.message}`);

    // Отклоняем промис асинк фухнкции
    throw err;
  }
};

///////////////////////////////////////
//264 Returning Values from Async FunctionsTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO
/////////////////////////////////////////
/*
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}💥`);
  }
  console.log('3: Finished getting location');
})();
*/
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
///////////////////////////////////////
// 265 Running Promises in ParallelTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO
/////////////////////////////////////////
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
*/
///////////////////////////////////////
//266 Other Promise Combinators race, allSettled and anyTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO
/////////////////////////////////////////
/*
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/germany`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('EROOR'),
  Promise.resolve('Success2'),
  Promise.resolve('Success3w'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('EROOR'),
  Promise.resolve('Success2'),
  Promise.resolve('Success3w'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('EROOR'),
  Promise.resolve('Success2'),
  Promise.resolve('Success3w'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

///////////////////////////////////////
//267 Coding Challenge #3
// TODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODOTODO
/////////////////////////////////////////
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Изображение не найденно'));
    });
  });
};

let currentImg;
// Part 1
const loadNPause = async function () {
  try {
    // загруизили img 1
    currentImg = await createImage('./img/img-1.jpg');
    console.log('загрузил 1 изображение');
    await wait(2);
    currentImg.style.display = 'none';
    currentImg = await createImage('./img/img-2.jpg');
    console.log('загрузил 2 изображение');
    await wait(2);
    currentImg.style.display = 'none';
    currentImg = await createImage('./img/img-3.jpg');
    console.log('загрузил 3 изображение');
    await wait(2);
    currentImg.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);

/*
createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('загрузил 1 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Загрузил 2 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Загрузил 3 изображение');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/
