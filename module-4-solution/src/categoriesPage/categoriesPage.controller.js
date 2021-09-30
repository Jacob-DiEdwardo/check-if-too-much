(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('categoriesPageCtrl', ['menuCategories', CategoriesPageController]);

    function CategoriesPageController(menuCategories) {
        var categoriesPageVm = this;
        categoriesPageVm.menuCategories = menuCategories;
    }
})();