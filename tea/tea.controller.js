(function() {
  'use strict'

  angular
    .module('app')
    .controller('TeaController', TeaController)

  function TeaController($location, TeaService){
    var vm = this;
    vm.getCart = TeaService.getCart;
    vm.addCart = function(item){
      TeaService.addCart(item);
    };

    TeaService.getTeas().then(function(teas){
      vm.teas = teas;
      vm.categories = [];

      angular.forEach(vm.teas, function(item){
        angular.forEach(item.categories, function(i){
          if(vm.categories.indexOf(i) == -1){
            vm.categories.push(i);
          }
        })
      })
    })
  }

})();
