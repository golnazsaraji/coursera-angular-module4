(function() {
  "use strict";

  angular.module("MenuApp")
    .component("items", {
      templateUrl: "categories/items-list.template.html",
      controller: ItemsComponentController,
      bindings: {
        list: "<"
      }
    });

  ItemsComponentController.$inject = [];
  function ItemsComponentController() {
  }
})();
