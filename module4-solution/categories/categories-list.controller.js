(function() {
  "use strict";

  angular.module("MenuApp")
    .controller("CategoriesListController", CategoriesListController);

  CategoriesListController.$inject = ["MenuDataService", "items"];
  function CategoriesListController (MenuDataService, categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }
})();
