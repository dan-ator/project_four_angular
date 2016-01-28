"use strict";

(function(){
  angular
  .module("outfits")
  .controller("OutfitShowController", [
    "OutfitFactory",
    "$stateParams",
    "OutfitItemFactory",
    "$state",
    OutfitShowControllerFunction
  ]);

  function OutfitShowControllerFunction(OutfitFactory, $stateParams, OutfitItemFactory, $state){
    var self = this
    this.outfit = OutfitFactory.get({id: $stateParams.id}, function(){
      self.outfit_items = OutfitItemFactory.query({id: $stateParams.id});
    })
    this.destroy = function(outfit_item){
      outfit_item.$remove_from_outfit({item_id: outfit_item.item.id, outfit_item_id: outfit_item.id}, function(outfit){
        $state.go('outfitIndex', outfit)
      })
    }
  }
}());
