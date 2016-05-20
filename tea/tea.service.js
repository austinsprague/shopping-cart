(function () {
  angular
    .module('app')
    .factory('TeaService', TeaService);

  function TeaService($http, $q){
    var teas = [];
    var cart = [];
    var categories = [];
    var resolvedData = false;

    return {
      getTeas: function () {
        if (teas.length == 0 && !resolvedData) {
          return $http.get('teas.json').then(function(result){
            teas = result.data;
            angular.forEach(teas, function(item){
              item.quantity = 0;
            });
            return teas;
          });
        } else {
          return $q(function(resolve, reject) {
            resolve(teas)
          });
        }
      },
      getCategories: function() {
        return this.getTeas().then(function(teas){
          angular.forEach(teas, function(item){
            angular.forEach(item.categories, function(i){
              if(categories.indexOf(i) == -1){
                categories.push(i);
              }
            })
          })
          return categories;
        })
      },
      addCart: function (tea, qty) {
        var teaIndex = cart.indexOf(tea);

        if(teaIndex == -1){
          tea.quantity = tea.quantity + qty;
          cart.push(tea);
        }
        else {
          cart[teaIndex].quantity = cart[teaIndex].quantity + qty;
        }
        return cart;
      },
      getCart: function(){
        return cart;
      }
    }
  }
})();
