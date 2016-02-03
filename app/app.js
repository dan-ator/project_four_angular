"use strict";

(function(){
  angular
  .module("closet", [
    "ui.router",
    "ng-token-auth",
    "items",
    "outfits",
    "ngResource"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function AuthConfigFunction($authProvider) {
    $authProvider.configure({
      apiUrl: URL_BASE
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url:"/",
      templateUrl: "app/home.html"
    })
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
    .state("outfitIndex", {
      url: "/outfits",
      templateUrl: "app/outfits/index.html",
      controller: "OutfitIndexController",
      controllerAs: "OutfitIndexViewModel"
    })
    .state("outfitNew", {
      url: "/outfits",
      templateUrl: "app/outfits/new.html",
      controller: "OutfitNewController",
      controllerAs: "OutfitNewViewModel"
    })
    .state("outfitShow", {
      url: "/outfits/:id",
      templateUrl: "app/outfits/show.html",
      controller: "OutfitShowController",
      controllerAs: "OutfitShowViewModel"
    })
    .state("outfitEdit", {
      url: "/outfits/:id/edit",
      templateUrl: "app/outfits/edit.html",
      controller: "OutfitEditController",
      controllerAs: "OutfitEditViewModel"
    })
    .state("signin", {
      url: "/signin",
      templateUrl: "app/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "app/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "app/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
  }
})();
