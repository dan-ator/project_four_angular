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
      this.uploader = new FileUploader({url: URL_BASE + "/items"});
      this.uploader.onCompleteAll = function(){
        $state.go('itemIndex')
      }
      this.create = function(){
        self.uploader.getNotUploadedItems()[0].formData.push(self.item)
        self.uploader.uploadAll()
      }
    }
}());
