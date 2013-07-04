/// <reference path="../angular.min.js" />
var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
    return { message: "Data retrieved from service" }
})


function FirstController($scope, Data) {
    $scope.data = Data;
}

function SecondController($scope, Data) {
    $scope.data = Data;
}