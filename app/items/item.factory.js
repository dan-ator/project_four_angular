(function(){
  angular
  .module("items")
  .factory("ItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource(URL_BASE + "/items/:id", {}, {
      update: {method: "PUT"},
      add_to_outfit: {method: "POST", url: URL_BASE + "/items/:id/add_to_outfit"}
    });
  }
}());
