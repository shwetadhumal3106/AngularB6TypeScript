"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, age, department, isTransportAvail) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.isTransportAvail = isTransportAvail;
    }
    return Employee;
}());
exports.Employee = Employee;
