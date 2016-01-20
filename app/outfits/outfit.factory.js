(function(){
  angular
  .module("outfits")
  .factory("OutfitFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource(URL_BASE + "/outfits/:id", {}, {
      update: {method: "PUT"}
      // remove_from_outfit: {method: "DESTROY", url: URL_BASE + "/items/:id/remove_from_outfit"}
    });
  }
}());
