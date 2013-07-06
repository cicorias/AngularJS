/// <reference path="../angular.min.js" />

var app = angular.module('superhero', []);

app.directive('superman', function () {
    return {
        restrict: 'E', // E stands for Element. Other values are A [anchor], C [class] , M [comment]. Default to A
        template: '<div>I am going to save the world</div>'
    }
});

app.directive('superwoman', function () {
    return {
        restrict: 'A',
        link: function () {
            alert('I wil save the day');
        }
    }
});

app.directive('superclass', function () {
    return {
        restrict: 'C',
        link: function () {
            alert('Magical');
        }
    }
});

app.directive('supercomment', function () {
    return {
        restrict: 'M',
        link: function () {
            alert('Directive comment');
        }
    }
});