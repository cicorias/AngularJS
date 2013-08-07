function EmployeeController($scope) {

    $scope.employees = [
        { name: 'Scott Allen', company: 'OdeToCode' },
        { name: 'Dan Wahlin', company: 'The Wahlin Group' },
        { name: 'Scott Hanselman', company: 'Microsoft' },
        { name: 'John Papa', company: 'Pluralsight' },
    ];

    $scope.addEmployee = function () {
        $scope.employees.push({ name: 'A', company: 'B' });
        var employeesList = document.getElementById('employeesListView').winControl;
        var dataList = new WinJS.Binding.List($scope.employees);
        employeesList.itemDataSource = dataList.dataSource;
    }

    $scope.name = 'PP';
}
