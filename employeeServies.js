"use strict";
//import { Employee } from './employee';
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmployees = void 0;
function findEmployees(employees, arg2) {
    if (typeof arg2 === 'number') {
        return employees.find(function (e) { return e.id === arg2; });
    }
    else if (typeof arg2 === 'string') {
        return employees.filter(function (e) { return e.name === arg2; });
    }
    else {
        return undefined;
    }
}
exports.findEmployees = findEmployees;
// import { Employee } from './employee';
// import { findEmployees } from './find-employees';
// const employees: Employee[] = [
// new Employee(1, 'John Doe', 30, 'Sales', true),
// new Employee(2, 'Jane Smith', 25, 'Marketing'),
// new Employee(3, 'Bob Johnson', 40, 'Finance', false)
// ];
// console.log(findEmployees(employees, 2)); // Employee { id: 2, name: 'Jane Smith', age: 25, department: 'Marketing' }
// console.log(findEmployees(employees, 'John Doe')); // [ Employee { id: 1, name: 'John Doe', age: 30, department: 'Sales', isTransportAvail: true } ]
// console.log(findEmployees(employees, 'Alice Brown')); // []
