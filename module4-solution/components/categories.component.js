(function() {
  "use strict";

  angular.module("MenuApp")
    .component("categories", {
      templateUrl: "components/categories.template.html",
      controller: CategoriesComponentController,
      bindings: {
        items: "<"
      }
    });

  CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {
  }
})();
