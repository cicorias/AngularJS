/// <reference path="../angular.min.js" />
var simpleModule = angular.module('SimpleModule', []);

simpleModule.controller('SimpleController', function ($scope) {
    $scope.techies = [
        { name: 'Prasad Honrao', company: 'Cognizant' },
        { name: 'Colin Gray', company: 'JPMC' },
        { name: 'Scott Allen', company: 'OdeToCode' },
        { name: 'Dan Wahlin', company: 'The Wahlin Group' },
        { name: 'Scott Hanselman', company: 'Microsoft' },
        { name: 'John Papa', company: 'Pluralsight' }
    ];
})


// Another way to define module and controller binding

//function SimpleController($scope) {
//    $scope.techies = [
//        { name: 'Prasad Honrao', company: 'Cognizant' },
//        { name: 'Colin Gray', company: 'JPMC' },
//        { name: 'Scott Allen', company: 'OdeToCode' },
//        { name: 'Dan Wahlin', company: 'The Wahlin Group' },
//        { name: 'Scott Hanselman', company: 'Microsoft' },
//        { name: 'John Papa', company: 'Pluralsight' }
//    ];
//}
//simpleModule.controller(SimpleController);

