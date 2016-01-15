(function(){
  angular
  .module("items")
  .factory("ItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("https://virtual-closet-app.herokuapp.com/items", {}, {
      update: {method: "PUT"}
    });
  }
}());
