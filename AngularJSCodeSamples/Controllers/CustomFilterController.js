/// <reference path="../angular.min.js" />

var customFilterApp = angular.module('customFilterApp', []);
customFilterApp.filter('reverse', function () {
    return function (text) {
        return text.split('').reverse().join('');
    }
}
);

function CustomFilterController($scope) {

    $scope.message = "Hello";

}