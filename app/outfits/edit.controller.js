"use strict";

(function(){
  angular
    .module( "outfits" )
    .controller( "OutfitEditController", [
      "OutfitFactory",
      "$stateParams",
      "$state",
      OutfitEditControllerFunction
    ]);

  function OutfitEditControllerFunction( OutfitFactory, $stateParams, $state ){
    this.outfit = OutfitFactory.get({id: $stateParams.id});
    this.update = function(){
      this.outfit.$update({id: $stateParams.id}, function(outfit){
        $state.go('outfitShow', outfit);
      })
    }
    this.destroy = function(){
      this.outfit.$delete({id: $stateParams.id}, function(outfit){
        $state.go('outfitIndex', outfit);
      });
    }
  }
}());
