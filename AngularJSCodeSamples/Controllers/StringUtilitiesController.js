function StringUtilitiesController($scope) {
    $scope.data = "hello world";

    // reverseMessage function is exposed to view
    $scope.reverseMessage = function (message) {
        return message.split('').reverse().join('');
    };
}