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

$(document).ready(function () {

    /**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     */
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function init(elements) {
            this.elements = elements;
        },

        add: function add() {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function remove() {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className = document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    myNavBar.init(["header", "header-container", "brand"]);

    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager() {

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }
    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function (e) {
        offSetManager();
    };

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     */
    offSetManager();
});
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

app.directive('logo', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/logo.html'
  };
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
