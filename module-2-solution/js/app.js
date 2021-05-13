(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyCtrl', ['ShoppingListCheckOffService', ToBuyController])
    .controller('AlreadyBoughtCtrl', ['ShoppingListCheckOffService', AlreadyBoughtController])
    .service('ShoppingListCheckOffService', [ShoppingListCheckOffService]);

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyVm = this;
    toBuyVm.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuyVm.boughtItem = ShoppingListCheckOffService.boughtItem;
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtVm = this;
    alreadyBoughtVm.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var _toBuyList = [
      {
        name: 'Wings',
        quantity: 1
      },
      {
        name: 'Apples',
        quantity: 6
      },
      {
        name: 'Cuban sandwiches',
        quantity: 2
      },
      {
        name: 'Almond milk',
        quantity: 1
      },
      {
        name: 'Cinnamon Toaster',
        quantity: 2
      }
    ];
    var _boughtList = [];

    function getToBuyList() {
      return _toBuyList;
    }

    function getBoughtList() {
      return _boughtList;
    }

    function boughtItem(index) {
      if (typeof index === 'number' && _toBuyList[index]) {
        var itemToMove = _toBuyList[index];
        _toBuyList.splice(index, 1);
        _boughtList.push(itemToMove);
      }
    }

    return {
      getToBuyList: getToBuyList,
      getBoughtList: getBoughtList,
      boughtItem: boughtItem
    };

  }

})();
