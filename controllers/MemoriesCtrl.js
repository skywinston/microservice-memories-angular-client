app.controller('MemoriesCtrl', function MemoriesCtrl($scope, $http, $routeParams){

  $scope.getMemories = function(){
    $http.get('http://g12-sky-winston-memories.cfapps.io/api/v1/memories').success(function(response){
      $scope.memories = response.data;
    });
  }

  $scope.getYears = function(){
    $http.get('http://g12-sky-winston-memories.cfapps.io/api/v1/memories/years').success(function(response){
      $scope.years = response.data;
    });
  }

  $scope.yearLookup = function(year){
    $http.get('http://g12-sky-winston-memories.cfapps.io/api/v1/memories/'+year).success(function(response){
      $scope.memories = response.data;
    });
  }

  $scope.getMemories();
  $scope.getYears();

  $scope.newMemory = {
    data: {
      type: "memory",
      attributes: {
        "old_days": '',
        "these_days": '',
        "year": ''
      }
    }
  }

  $scope.addMemory = function(){
    $http.post('http://g12-sky-winston-memories.cfapps.io/api/v1/memories', $scope.newMemory).success(function(response){
      console.log(response);
      $scope.getMemories();
    });
  }
});
