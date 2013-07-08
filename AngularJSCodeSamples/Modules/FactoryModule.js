/// <reference path="../angular.min.js" />

var employeeModule = angular.module('EmployeeModule', []);

employeeModule.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '../../pages/12Factory.html', controller: 'EmployeeController' })
});

employeeModule.factory('employeeFactory', function () {

    var employees = [
        { name: 'Prasad Honrao', company: 'Cognizant' },
        { name: 'Colin Gray', company: 'JPMC' }
    ];

    var factory = {};

    factory.getEmployees = function () {
        return employees;
    }

    return factory;
});

employeeModule.controller('EmployeeController', function ($scope, employeeFactory) {
    $scope.Employees = employeeFactory.getEmployees();
});