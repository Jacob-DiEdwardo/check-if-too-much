(function() {
    'use strict';

    angular.module('MenuData')
        .service('MenuDataService', ['$http', MenuDataService]);

    function MenuDataService($http) {
        var categoriesUri = 'https://davids-restaurant.herokuapp.com/categories.json';
        var menuItemsUri = 'https://davids-restaurant.herokuapp.com/menu_items.json';

        function getAllCategories() {
            return $http.get(categoriesUri).then(function(response) {
                if (response.data && response.data.length) {
                    return response.data;
                }
            }).catch(function(error) {
                //TODO
            });
        }

        function getItemsForCategory(categoryShortName) {
            var request = {
                url: menuItemsUri,
                method: 'GET',
                params: {
                    category: categoryShortName
                }
            };
            return $http(request).then(function(response) {
                if (response.data && response.data.menu_items && response.data.menu_items.length) {
                    return response.data;
                }
            }).catch(function(error) {
                //TODO
            });
        }

        return {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory
        };
    }
})();