(function () {
  angular
    .module('app')
    .factory('TeaService', TeaService);

  function TeaService($http){
    var teas = [];
    var cart = [];

    return {
      getTeas: function () {
        return $http.get('teas.json').then(function(result){
          teas = result.data;
          return teas;
          })
      },
      // else {
      //   return $q(function(resolve, reject) {
      //     resolve(teas);
      //   })
      // }
      addCart: function (tea) {
        cart.push(tea);
        return cart;
      },
      getCart: cart
    }
  }
})();
