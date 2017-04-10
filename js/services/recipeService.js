app.service('recipeService', function($http){
  var searchBaseUrl = 'http://food2fork.com/api/search?key=108f2a901009506862530f55ab1d957d';
  var getBaseUrl = 'http://food2fork.com/api/get?key=108f2a901009506862530f55ab1d957d&rId=';
  this.getRecipes = function(){
    var promise = $http({
      method: 'GET',
      url: searchBaseUrl
    })
    return promise.then(function(response){
      return response.data;
    })
  }
  this.getRecipeDetail = function(id){
    console.log(id);
    var promise = $http({
      method: 'GET',
      url: getBaseUrl + id
    })
    return promise.then(function(response){
      return response.data;
    })
  }
})
