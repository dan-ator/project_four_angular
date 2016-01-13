(function(){
  angular
  .module("outfits")
  .factory("OutfitFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/outfits/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
