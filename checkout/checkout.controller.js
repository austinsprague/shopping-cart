(function(){
  angular
    .module('app')
    .controller('CheckoutController', CheckoutController)

  function CheckoutController($location, TeaService){
    vm = this;
    vm.getCart = TeaService.getCart;


  }
})();
