(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', LunchCheckController]);

function LunchCheckController($scope) {
  $scope.placeholder = 'list comma-separated dishes you usually have for lunch';
  $scope.lunch = '';
  $scope.showMessage = false;
  $scope.message = '';
  $scope.success = false;
  $scope.error = false;

  $scope.checkLunch = function() {
    var lunchArray = $scope.lunch.split(',').filter(function(item) {return item.match(/\w+/g)});
    if (lunchArray.length === 0) {
      $scope.message = 'Please enter data first.';
      $scope.error = true;
      $scope.success = false;
    } else {
      $scope.message = lunchArray.length <= 3 ? 'Enjoy!' : 'Too much.';
      $scope.success = true;
      $scope.error = false;
    }
    $scope.showMessage = true;
  };
};

})();
