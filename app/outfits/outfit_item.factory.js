(function(){
  angular
  .module("outfits")
  .factory("OutfitItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource(URL_BASE + "/outfits/:id/outfit_items", {}, {
    });
  }
}());
