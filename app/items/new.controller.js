"use strict";

(function(){
  angular
    .module( "items" )
    .controller( "ItemNewController", [
      "ItemFactory",
      "FileUploader",
      "$state",
      ItemNewControllerFunction
    ]);

    function ItemNewControllerFunction( ItemFactory, FileUploader, $state ){
      this.item = new ItemFactory();
      this.uploader = new FileUploader({url: "http://localhost:3000/items"});
      this.create = function(){
        this.item.$save(this.item, function(item){
          $state.go('itemIndex', item);
        })
      }
    }
}());
