var app = angular.module('memories', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/memories.html',
    controller: 'MemoriesCtrl'
  })
  .when('/:year', {
    templateUrl: 'partials/year.html',
    controller: 'MemoriesCtrl'
  })
  .when('/years', {
    templateUrl: 'partials/years.html',
    controller: 'MemoriesCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
})
