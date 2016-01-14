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
  }
}());
