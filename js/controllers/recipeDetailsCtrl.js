app.controller('recipeDetailsCtrl', function($scope, recipeService){

  $scope.getRecipeDetail = function(){

    var promise = recipeService.getRecipeDetail(sessionStorage.getItem('id'));
    return promise.then(function(response){
      $scope.recipeDetails = response;

    })
  }();
})
