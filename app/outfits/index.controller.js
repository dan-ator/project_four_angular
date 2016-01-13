"use strict";

(function(){
  angular
  .module("outfits")
  .controller("OutfitIndexController", [
    "OutfitFactory",
    OutfitIndexControllerFunction
  ]);

  function OutfitIndexControllerFunction(OutfitFactory){
    this.items = OutfitFactory.query();
  }
}());
