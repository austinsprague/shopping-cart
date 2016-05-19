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
    when('/checkout', {
      controller: 'CheckoutController',
      controllerAs: 'Checkout',
      templateUrl: 'partials/checkout.html'
  }).
    otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode(true);
  }
})();
