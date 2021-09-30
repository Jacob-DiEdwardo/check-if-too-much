(function() {
    'use strict';

    angular.module('Categories').component('categories', {
        templateUrl: 'src/categories/categories.template.html',
        bindings: {
            categoriesData: '<'
        }
    });

})();