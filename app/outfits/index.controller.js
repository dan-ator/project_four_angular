"use strict";

(function(){
  angular
  .module("outfits")
  .controller("OutfitIndexController", [
    "OutfitFactory",
    OutfitIndexControllerFunction
  ]);

  function OutfitIndexControllerFunction(OutfitFactory){
    this.outfits = OutfitFactory.query();
  }
}());
