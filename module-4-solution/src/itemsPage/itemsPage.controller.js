(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('itemsPageCtrl', ['menuItemsData', ItemsPageController]);

    function ItemsPageController(menuItemsData) {
        var itemsPageVm = this;
        itemsPageVm.category = menuItemsData.category.name;
        itemsPageVm.menuItems = menuItemsData.menu_items;
    }
})();