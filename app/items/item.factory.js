(function(){
  angular
  .module("items")
  .factory("ItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/items/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
