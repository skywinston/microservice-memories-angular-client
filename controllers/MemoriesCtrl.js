app.controller('MemoriesCtrl', function MemoriesCtrl($scope, $http, $routeParams){

  var serviceRegistryUrl = 'http://galvanize-service-registry.cfapps.io/api/v1/cohorts/g12';
  var guarantee = '/kids-these-days?guarantee='
  var myRegistry = 'http://g12-sky-winston-memories.cfapps.io/api/v1/memories';

  var defaultMemory = {
    data: {
      type: "memory",
      attributes: {
        "old_days": '',
        "these_days": '',
        "year": ''
      }
    }
  };

  $scope.memoriesUrl = '';
  $scope.getMemories = function(){
    $http.get(serviceRegistryUrl + guarantee + myRegistry).success(function(response){
      $scope.memoriesUrl = response.data[0].attributes.url;
      $http.get($scope.memoriesUrl).success(function(response){
        $scope.memories = response.data;
        $scope.getYears();
      });
    });
  }

  $scope.getYears = function(){
    $http.get($scope.memoriesUrl + '/years').success(function(response){
      $scope.years = response.data;
    });
  }

  $scope.yearLookup = function(year){
    $http.get($scope.memoriesUrl + '/' + year).success(function(response){
      $scope.memories = response.data;
    });
  }

  $scope.getMemories();

  $scope.addMemory = function(){
    $http.post(memoriesUrl, $scope.newMemory).success(function(response){
      $scope.getMemories();
      $scope.newMemory = defaultMemory;
    });
  }

  $scope.newMemory = defaultMemory;


});
