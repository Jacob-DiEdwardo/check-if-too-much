(function() {
    'use strict';

    angular.module('MenuApp')
        .config(['$stateProvider', '$urlRouterProvider', RoutesConfig]);

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/menuapp.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categoriesPage/categoriesPage.template.html',
                controller: 'categoriesPageCtrl',
                controllerAs: 'categoriesPageVm',
                resolve: {
                    menuCategories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/itemsPage/itemsPage.template.html',
                controller: 'itemsPageCtrl',
                controllerAs: 'itemsPageVm',
                resolve: {
                    menuItemsData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });
    }

})();