'use strict';

var app = angular.module('recipeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  }).state('recipes', {
    url: '/recipes',
    templateUrl: 'views/recipes.html',
    controller: 'recipeCtrl'
  }).state('recipedetails', {
    url: '/recipedetails',
    templateUrl: 'views/recipeDetails.html',
    controller: 'recipeDetailsCtrl'
  });
});
"use strict";
'use strict';

app.controller('recipeCtrl', function ($scope, recipeService) {
  $scope.getRecipes = function () {
    var promise = recipeService.getRecipes();
    return promise.then(function (response) {
      $scope.recipes = response.recipes;
    });
  };
  $scope.getRecipeDetail = function (id) {
    sessionStorage.setItem('id', id);
  };
  $scope.getRecipes();
});
'use strict';

app.controller('recipeDetailsCtrl', function ($scope, recipeService) {

  $scope.getRecipeDetail = function () {

    var promise = recipeService.getRecipeDetail(sessionStorage.getItem('id'));
    return promise.then(function (response) {
      $scope.recipeDetails = response;
    });
  }();
});
'use strict';

app.service('recipeService', function ($http) {
  var searchBaseUrl = 'http://food2fork.com/api/search?key=108f2a901009506862530f55ab1d957d';
  var getBaseUrl = 'http://food2fork.com/api/get?key=108f2a901009506862530f55ab1d957d&rId=';
  this.getRecipes = function () {
    var promise = $http({
      method: 'GET',
      url: searchBaseUrl
    });
    return promise.then(function (response) {
      return response.data;
    });
  };
  this.getRecipeDetail = function (id) {
    console.log(id);
    var promise = $http({
      method: 'GET',
      url: getBaseUrl + id
    });
    return promise.then(function (response) {
      return response.data;
    });
  };
});
//# sourceMappingURL=bundle.js.map
