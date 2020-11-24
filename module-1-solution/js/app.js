(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
    $scope.placeholder = "list comma separated dishes you usually have for lunch";
    $scope.lunch = "";


    $scope.lunchChecker = function(takes in the entry) {

    };
};

})();


$scope.lunchConverter = function(takes in the entry) {
store entry in a variable
convert that variable into an Array
return the array 
};

$scope.lunchChecker = function(takes in the array) {
loop over each item in the array and count them
check if the number of items is less than or equal to 3
if so, return "Enjoy"
if not, return "too much"
};

$scope.lunchConverter = function(lunch) {
    let lunchArray = lunch.split();
    return lunchArray;
};