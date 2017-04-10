app.controller('recipeCtrl', function($scope, recipeService){
  $scope.getRecipes = function(){
    var promise = recipeService.getRecipes();
    return promise.then(function(response){
      $scope.recipes = response.recipes;
    })
  }
  $scope.getRecipeDetail = function(id){
  sessionStorage.setItem('id', id)
  }
  $scope.getRecipes();
})
