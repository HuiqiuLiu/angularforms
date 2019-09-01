angularFormsApp.directive('employeeForm',
    function () {
        return {
            restrict: 'E',//use only as Element
            templateUrl: 'app/EmployeeForm/efTemplate.html'
        };
    }); 