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
      this.uploader = new FileUploader({url: "https://virtual-closet-app.herokuapp.com/items"});
      this.uploader.onCompleteAll = function(){
        $state.go('itemIndex')
      }
      this.create = function(){
        this.uploader.getNotUploadedItems()[0].formData.push(this.item)
        this.uploader.uploadAll()
        // this.item.$save(this.item, function(item){
        // })
        // function(item){

        // }
      }
    }
}());
