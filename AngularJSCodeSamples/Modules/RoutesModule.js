/// <reference path="../angular.min.js" />

var routesModule = angular.module('RoutesModule', []);

routesModule.config(function ($routeProvider) {
    $routeProvider
    .when('/customerInsert', { templateUrl: '../../pages/partials/customerInsert.html', controller: 'CustomerController' })
    .when('/customerList', { templateUrl: '../../pages/partials/customerList.html', controller: 'CustomerController' })
    .when('/', { templateUrl: '../../pages/partials/customerList.html', controller: 'CustomerController' })
    .otherwise({ redirectTo: '/' })
});

function CustomerController($scope, $location) {
    $scope.Customers = [
        { name: 'Prasad Honrao', company: 'Cognizant' },
        { name: 'Colin Gray', company: 'JPMC' },
        { name: 'Scott Allen', company: 'OdeToCode' },
        { name: 'Dan Wahlin', company: 'The Wahlin Group' },
        { name: 'Scott Hanselman', company: 'Microsoft' },
        { name: 'John Papa', company: 'Pluralsight' }
    ];

    $scope.addCustomer = function (navigateTo) {
        $scope.Customers.push({
            name: $scope.newCustomer.name,
            company: $scope.newCustomer.company
        });
        $location.path(navigateTo);
    }
}

routesModule.controller = CustomerController;
