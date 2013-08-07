(function () {
    "use strict";

    var app = WinJS.Application;

    //var employees = [
    //    { name: 'Scott Allen', company: 'OdeToCode' },
    //    { name: 'Dan Wahlin', company: 'The Wahlin Group' },
    //    { name: 'Scott Hanselman', company: 'Microsoft' },
    //    { name: 'John Papa', company: 'Pluralsight' },
    //];

    //WinJS.Namespace.define("Data", {
    //    employees: employees
    //});

    app.onactivated = function (args) {
        WinJS.UI.processAll();
    };

    //app.onready = function () {
    //    var dataList = new WinJS.Binding.List(Data.employees);
    //    var employeesList = document.getElementById('employeesListView').winControl;
    //    employeesList.itemDataSource = dataList.dataSource;
    //}

    app.start();
})();
