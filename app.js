(function() {
  'use strict'

  angular
    .module('app', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      // controller: 'MainController',
      // controllerAs: 'Main',
      templateUrl: 'views/main.html'
    }).
    otherwise({
      redirectTo: '/'
    })

    // $locationProvider.html5mode(true);
  }
})();
