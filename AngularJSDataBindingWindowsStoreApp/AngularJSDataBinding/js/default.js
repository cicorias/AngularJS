function TechieController($scope) {
    $scope.Techies = [
        { name: 'Prasad Honrao', company: 'Cognizant' },
        { name: 'Colin Gray', company: 'JPMC' },
        { name: 'Scott Allen', company: 'OdeToCode' },
        { name: 'Dan Wahlin', company: 'The Wahlin Group' },
        { name: 'Scott Hanselman', company: 'Microsoft' },
        { name: 'John Papa', company: 'Pluralsight' }
    ];

    $scope.addTechie = function () {
        $scope.Techies.push({
            name: $scope.newTechie.name,
            company: $scope.newTechie.company
        });
    }
}

