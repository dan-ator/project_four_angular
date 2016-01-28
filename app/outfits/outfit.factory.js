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
    });
  }
}());
