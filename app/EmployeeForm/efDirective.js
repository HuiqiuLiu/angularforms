angularFormsApp.directive('employeeForm',
    function () {
        return {
            restrict: 'E',//use only as element
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        };
    });