import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

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

    // 0) обновить результаты что бы отметить выбранный актив
    resultsView.update(model.getSearchResultsPage());

    // 1) обновляем вид закладки
    bookmarksView.update(model.state.bookmarks);

    //2) Загружаем рецепт
    await model.loadRecipe(id);

    //3) Отрисовываем рецепт (рендер)
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
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

const contolServings = function (newServings) {
  //  Обновить порции в рецепте(state)
  model.updateServings(newServings);

  // Обновить представление рецепта
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Добавить /удалить закладку
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // обновить представление рецепта
  recipeView.update(model.state.recipe);

  // рендер закладки
  bookmarksView.render(model.state.bookmarks);
  console.log(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // спинер ожидания
    addRecipeView.renderSpinner();
    //  загрузить новые данные рецепта
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // render recipe
    recipeView.render(model.state.recipe);

    // Сообщение об успешном завершении
    addRecipeView.renderMessage();

    // Рендер закладок
    bookmarksView.render(model.state.bookmarks);

    // изменить id в URl адресе
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();

    // закрыть окно формы
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('⛔', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandelRender(controlRecipes);
  recipeView.addHendlerUpdateServings(contolServings);
  recipeView.addhandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView._addHandlerClick(controlPagenation);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
