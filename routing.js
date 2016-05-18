(function() {
  // 'use strict'

  angular
    .module('app', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      controller: 'TeaController',
      controllerAs: 'Tea',
      templateUrl: 'partials/main.html'
    }).
    otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode(true);
  }
})();
