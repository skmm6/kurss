import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

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
    // 1) Набираете поисковй запрос
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Загрузка поиска рецептов
    await model.loadSearchResults(query);

    // 3) Рендер результаты
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();

const init = function () {
  recipeView.addHandelRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
