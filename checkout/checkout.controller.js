(function(){
  angular
    .module('app')
    .controller('CheckoutController', CheckoutController)

  function CheckoutController($location, TeaService){
    vm = this;
    vm.cart = TeaService.getCart();




  }
})();
