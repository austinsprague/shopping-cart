(function() {
  'use strict'

  angular
    .module('app')
    .controller('TeaController', TeaController)

  function TeaController($location, TeaService){
    var vm = this;
    vm.teas;
    vm.categories;
    vm.getCart = TeaService.getCart();

    TeaService.getTeas().then(function(teas){
      vm.teas = teas;
      TeaService.getCategories().then(function(categories){
        vm.categories = categories;
      })
    })
    vm.addCart = function(item, quantity){
      TeaService.addCart(item, quantity);
      vm.bagTotal = vm.bagTotal + quantity;
    };

  }

})();
