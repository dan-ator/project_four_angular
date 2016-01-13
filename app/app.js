"use strict";

(function(){
  angular
  .module("closet", [
    "ui.router",
    "items",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("itemIndex", {
      url: "/items",
      templateUrl: "app/items/index.html",
      controller: "ItemIndexController",
      controllerAs: "ItemIndexViewModel"
    })
    .state("itemShow", {
      url: "/items/:id",
      templateUrl: "app/items/show.html",
      controller: "ItemShowController",
      controllerAs: "ItemShowViewModel"
    })
    .state("itemNew", {
      url: "/items",
      templateUrl: "app/items/new.html",
      controller: "ItemNewController",
      controllerAs: "ItemNewViewModel"
    })
    .state("itemEdit", {
      url: "/items/:id/edit",
      templateUrl: "app/items/edit.html",
      controller: "ItemEditController",
      controllerAs: "ItemEditViewModel"
    })
  }
})();
