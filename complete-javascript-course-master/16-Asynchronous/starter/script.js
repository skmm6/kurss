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
  // countriesContainer.style.opacity = 1;
};

const renderErorr = function (msg) {
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
//       renderErorr(`Something went wrong ⛔⛔⛔⛔ ${err.message}. Try again!`);
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
      renderErorr(`Something went wrong ⛔⛔⛔⛔ ${err.message}. Try again!`);
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
