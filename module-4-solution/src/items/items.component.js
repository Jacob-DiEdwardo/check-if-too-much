(function() {
    'use strict';

    angular.module('Items').component('items', {
        templateUrl: 'src/items/items.template.html',
        bindings: {
            itemsData: '<',
            category: '<'
        }
    });
    
})();