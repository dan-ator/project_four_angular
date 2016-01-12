"use strict";

(function(){
  angular
    .module( "items" )
    .controller( "ItemEditController", [
      "ItemFactory",
      "$stateParams",
      ItemEditControllerFunction
    ]);

  function ItemEditControllerFunction( ItemFactory, $stateParams ){
    this.item = ItemFactory.get({id: $stateParams.id});
    this.update = function(){
      this.item.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.item.$delete({id: $stateParams.id});
    }
  }
}());
