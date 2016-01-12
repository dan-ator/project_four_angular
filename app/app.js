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
      templateUrl: "js/items/index.html",
      controller: "ItemIndexController",
      controllerAs: "ItemIndexViewModel"
    })
    .state("itemShow", {
      url: "/items/:id",
      templateUrl: "js/items/show.html",
      controller: "ItemShowController",
      controllerAs: "ItemShowViewModel"
    })
    .state("itemNew", {
      url: "/items/new",
      templateUrl: "js/items/new.html",
      controller: "ItemNewController",
      controllerAs: "ItemNewViewModel"
    })
    .state("itemEdit", {
      url: "/items/:id/edit",
      templateUrl: "js/items/edit.html",
      controller: "ItemEditController",
      controllerAs: "ItemEditViewModel"
    })
  }
})();
