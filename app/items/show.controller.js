"use strict";

(function(){
  angular
  .module("items")
  .controller("ItemShowController", [
    "ItemFactory",
    "$stateParams",
    ItemShowControllerFunction
  ]);

  function ItemShowControllerFunction(ItemFactory, $stateParams){
    this.item = ItemFactory.get({id: $stateParams.id});
  }
}());
