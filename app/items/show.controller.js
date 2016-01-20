"use strict";

(function(){
  angular
  .module("items")
  .controller("ItemShowController", [
    "ItemFactory",
    "$stateParams",
    "OutfitFactory",
    "$state",
    ItemShowControllerFunction
  ]);

  function ItemShowControllerFunction(ItemFactory, $stateParams, OutfitFactory, $state){
    this.item = ItemFactory.get({id: $stateParams.id});
    this.outfits = OutfitFactory.query();
    this.create = function(){
      this.item.$add_to_outfit({id: this.item.id, outfit_id: this.outfit_id}, function(outfit_item){
        $state.go('outfitShow', {id: outfit_item.outfit_id});
      })
    }
  }
}());
