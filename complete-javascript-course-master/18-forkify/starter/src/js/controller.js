import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2
// 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bccb2'
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // спинер
    recipeView.renderSpinner();
    //1) Загружаем рецепт
    await model.loadRecipe(id);
    //2) Отрисовываем рецепт (рендер)
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Набираете поисковй запрос
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Загрузка поиска рецептов
    await model.loadSearchResults(query);

    // 3) Рендер результаты
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render кнопки пагинации
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagenation = function (goToPage) {
  // 1) рендер новых результатов
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Рендер новые кнопки пагинации
  paginationView.render(model.state.search);
};

const contolServings = function () {
  //  Обновить порции в рецепте(state)
  model.updateServings(6);

  // Обновить представление рецепта
};

const init = function () {
  recipeView.addHandelRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView._addHandlerClick(controlPagenation);
};
init();
