(function(){
  angular
  .module("outfits")
  .factory("OutfitFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("https://virtual-closet-app.herokuapp.com/outfits/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
