(function(){
  angular
  .module("items")
  .factory("ItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("https://virtual-closet-app.herokuapp.com/items/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
