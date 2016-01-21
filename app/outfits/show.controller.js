"use strict";

(function(){
  angular
  .module("outfits")
  .controller("OutfitShowController", [
    "OutfitFactory",
    "$stateParams",
    "OutfitItemFactory",
    OutfitShowControllerFunction
  ]);

  function OutfitShowControllerFunction(OutfitFactory, $stateParams, OutfitItemFactory){
    var self = this
    this.outfit = OutfitFactory.get({id: $stateParams.id}, function(){
      self.items = OutfitItemFactory.query({id: $stateParams.id}, function(){
      });
    })
      // use a different factory to get outfitItems
      // then do another callback to iterate through that factories return
      // that call back will utilize the item factory to query for the items you need
  }
}());
