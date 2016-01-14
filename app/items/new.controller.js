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
      var self = this
      this.item = new ItemFactory();
      this.uploader = new FileUploader({url: "http://localhost:3000/items"});
      this.create = function(){
        this.uploader.getNotUploadedItems()[0].formData.push(this.item)
        this.uploader.uploadAll()
        // this.item.$save(this.item, function(item){
          // $state.go('itemIndex', item);
        // })
      }
    }
}());
