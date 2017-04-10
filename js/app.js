var app = angular.module('recipeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('','/home')

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
  .state('recipes', {
    url: '/recipes',
    templateUrl: 'views/recipes.html',
    controller: 'recipeCtrl'
  })
  .state('recipedetails', {
    url: '/recipedetails',
    templateUrl: 'views/recipeDetails.html',
    controller: 'recipeDetailsCtrl'  
  })
})
