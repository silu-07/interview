var TemporaryEmployee = /** @class */ (function () {
    function TemporaryEmployee() {
    }
    TemporaryEmployee.prototype.role = function () {
        console.log("Temporary employee");
    };
    return TemporaryEmployee;
}());
var PermanentEmployee = /** @class */ (function () {
    function PermanentEmployee() {
    }
    PermanentEmployee.prototype.role = function () {
        console.log("Permanent employee");
    };
    return PermanentEmployee;
}());
var objTempEmployee = new TemporaryEmployee;
objTempEmployee.role();
