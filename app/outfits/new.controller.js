"use strict";

(function(){
  angular
    .module( "outfits" )
    .controller( "OutfitNewController", [
      "OutfitFactory",
      "$state",
      OutfitNewControllerFunction
    ]);

    function OutfitNewControllerFunction( OutfitFactory, $state ){
      this.outfit = new OutfitFactory();
      this.create = function(){
        this.outfit.$save(this.outfit, function(outfit){
          $state.go('outfitIndex', outfit);
        })
      }
    }
}());
