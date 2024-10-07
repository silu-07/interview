var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getEmpId = function () {
        return this._empId;
    };
    Employee.prototype.setEmpid = function (empid) {
        if (empid < 0) {
            console.log('cannt be less than zero');
        }
        else if (empid > 0) {
            console.log(this._empId = empid);
        }
    };
    return Employee;
}());
var objEmployee = new Employee();
objEmployee.setEmpid(-10);
console.log(objEmployee.getEmpId());
