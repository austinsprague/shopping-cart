(function() {
  'use strict'

  angular
    .module('app')
    .controller('TeaController', TeaController)

  function TeaController($location, TeaService){
    var vm = this;

    TeaService.getTeas().then(function(teas){
      vm.teas = teas;
      vm.categories= [];
      vm.order = 'categories';

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
