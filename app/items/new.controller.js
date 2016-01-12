"use strict";

(function(){
  angular
    .module( "items" )
    .controller( "ItemNewController", [
      "ItemFactory",
      ItemNewControllerFunction
    ]);

    function ItemNewControllerFunction( ItemFactory ){
      this.item = new ItemFactory();
      this.create = function(){
        this.item.$save();
      }
    }
}());
