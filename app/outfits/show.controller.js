"use strict";

(function(){
  angular
  .module("outfits")
  .controller("OutfitShowController", [
    "OutfitFactory",
    "$stateParams",
    OutfitShowControllerFunction
  ]);

  function OutfitShowControllerFunction(OutfitFactory, $stateParams){
    this.outfit = OutfitFactory.get({id: $stateParams.id});
    // this.outfit.outfit_items = outfit_item.outfit_id;
  }
}());
