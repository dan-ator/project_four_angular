(function(){
  angular
  .module("outfits")
  .factory("OutfitItemFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource(URL_BASE + "/outfits/:id/outfit_items/", {}, {
      remove_from_outfit: {method: "delete", url: URL_BASE + "/items/:item_id/remove_from_outfit"}
    });
  }
}());
