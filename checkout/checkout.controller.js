(function(){
  angular
    .module('app')
    .controller('CheckoutController', CheckoutController)

  function CheckoutController($location, TeaService){
    vm = this;
    vm.teas;
    vm.cart = TeaService.getCart();
    vm.cartTotal = TeaService.getCartTotal();
    // vm.cartQuantity = TeaService.getCartQuantity();
    TeaService.getTeas().then(function(teas){
      vm.teas = teas;
    });
    vm.delete = function(tea){
      TeaService.deleteCartItem(tea);
    };
    vm.updateQty = function(tea, quantity){
      tea.quantity = quantity;
    };
    vm.decreaseQty = function(tea){
      tea.quantity--;
    };
  }
})();
