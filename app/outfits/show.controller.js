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
      self.items = OutfitItemFactory.query({id: $stateParams.id});
    })
    // this.destroy = function(){
    //   self.outfit = OutfitFactory.get({id: $stateParams.id}, function(){
    //     self.items = OutfitItemFactory.query({id: $stateParams.id}), function(){
    //       items.$remove_from_outfit({id: outfit_item.id}, function(){
    //   });
    // }
  }
}());
