"use strict";

(function(){
  angular
    .module( "items" )
    .controller( "ItemNewController", [
      "ItemFactory",
      "FileUploader",
      ItemNewControllerFunction
    ]);

    function ItemNewControllerFunction( ItemFactory, FileUploader ){
      this.item = new ItemFactory();
      this.uploader = new FileUploader({url: "http://localhost:3000/items"});
      this.create = function(){
        this.item.$save();
      }
    }
}());
