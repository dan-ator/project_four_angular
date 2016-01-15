"use strict";

(function(){
  angular
  .module("items")
  .controller("ItemShowController", [
    "ItemFactory",
    "$stateParams",
    "OutfitFactory",
    ItemShowControllerFunction
  ]);

  function ItemShowControllerFunction(ItemFactory, $stateParams, OutfitFactory){
    this.item = ItemFactory.get({id: $stateParams.id});
    this.outfits = OutfitFactory.query();
    // 
    // this.outfit = OutfitFactory.get({id: $stateParams.id });
    // this.outfit.create(function(){
    //   this.outfit.$save(this.outfit, function(item){
    //     $state.go('itemIndex', item);
    //   })
    // })
  }
}());
