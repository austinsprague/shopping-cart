(function () {
  angular
    .module('app')
    .factory('TeaService', TeaService);

  function TeaService($http){
    var teas = [];
    var teaCategories = [];
    var cart = [];

    return {
      getTeas: function () {
        return $http.get('teas.json').then(function(result){
          teas = result.data;
          angular.forEach(teas.categories, function(item){
            teaCategories.push(item);
          })
          return teas;
        });
      // } else {
      //   return $q(function(resolve, reject) {
      //     resolve(teas);
      //   })
      }
    }
  }
})();
