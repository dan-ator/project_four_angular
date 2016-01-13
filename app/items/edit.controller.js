"use strict";

(function(){
  angular
    .module( "items" )
    .controller( "ItemEditController", [
      "ItemFactory",
      "$stateParams",
      "$state",
      ItemEditControllerFunction
    ]);

  function ItemEditControllerFunction( ItemFactory, $stateParams, $state ){
    this.item = ItemFactory.get({id: $stateParams.id});
    this.update = function(){
      this.item.$update({id: $stateParams.id}, function(item){
        $state.go('itemShow', item);
      })
    }
    this.destroy = function(){
      this.item.$delete({id: $stateParams.id}, function(item){
        $state.go('itemIndex', item);
      });
    }
  }
}());
