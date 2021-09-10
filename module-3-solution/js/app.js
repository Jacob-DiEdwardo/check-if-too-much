(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownCtrl', ['MenuSearchService', NarrowItDownController])
    .service('MenuSearchService', ['$http', MenuSearchService])
    .directive('itemsLoadingIndicator', [ItemsLoadingIndicatorDirective])
    .directive('foundItems', [FoundItemsDirective])

  function NarrowItDownController(MenuSearchService) {
    var narrowItDownVm = this;
    narrowItDownVm.showLoader = false;
    narrowItDownVm.searchTerm = '';
    narrowItDownVm.foundItems = [];
    narrowItDownVm.narrowItDown = narrowItDown;
    narrowItDownVm.removeItem = removeItem;

    function narrowItDown() {
      if (narrowItDownVm.searchTerm === '') {
        nothingFound();
      } else {
        narrowItDownVm.nothingFound = false;
        narrowItDownVm.showLoader = true;
        MenuSearchService.getMatchedMenuItems(narrowItDownVm.searchTerm).then(function(response) {
          if (response && response.length) {
            narrowItDownVm.foundItems = response;
          } else {
            nothingFound();
          }
        }).catch(function(error) {
          nothingFound();
        }).finally(function() {
          narrowItDownVm.showLoader = false;
        });
      }
    }

    function nothingFound() {
      narrowItDownVm.nothingFound = true;
      MenuSearchService.clearItems();
      narrowItDownVm.foundItems = MenuSearchService.getCurrentItems();
    }

    function removeItem(idx) {
      MenuSearchService.removeMenuItem(idx);
      narrowItDownVm.foundItems = MenuSearchService.getCurrentItems();
    }
  }

  function MenuSearchService($http) {
    var uri = 'https://davids-restaurant.herokuapp.com/menu_items.json';
    var _menuItems = [];

    function getMatchedMenuItems(searchTerm) {
      return $http.get(uri).then(function(response) {
        if (response.data && response.data.menu_items && response.data.menu_items.length) {
          _menuItems = response.data.menu_items.filter(function(item) {
            return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          });
          return _menuItems;
        }
      }).catch(function(error) {
        //TODO
      });
    }

    function getCurrentItems() {
      return _menuItems;
    }

    function removeMenuItem(idx) {
      _menuItems.splice(idx, 1);
    }

    function clearItems() {
      _menuItems = [];
    }

    return {
      getMatchedMenuItems: getMatchedMenuItems,
      getCurrentItems: getCurrentItems,
      removeMenuItem: removeMenuItem,
      clearItems: clearItems
    };
  }

  function ItemsLoadingIndicatorDirective() {
    return {
      templateUrl: 'itemsloaderindicator.template.html',
      restrict: 'E',
      replace: true,
      scope: {
        showLoader: '<'
      }
    };
  }

  function FoundItemsDirective() {
    return {
      templateUrl: 'founditems.template.html',
      restrict: 'E',
      replace: true,
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };
  }

})();