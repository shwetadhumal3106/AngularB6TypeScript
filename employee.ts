export class Employee {
    id: number;
    name: string;
    age: number;
    department: string;
    isTransportAvail?: boolean;
    
    constructor(id: number, name: string, age: number, department: string, isTransportAvail?: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.department = department;
    this.isTransportAvail = isTransportAvail;
    }
    }


    const employees: Employee[] = [
        new Employee(1, 'John Doe', 30, 'Sales', true),
        new Employee(2, 'Jane Smith', 25, 'Marketing'),
        new Employee(3, 'Bob Johnson', 40, 'Finance', false)
        ];
        
        console.log(findEmployees(employees, 2)); // Employee { id: 2, name: 'Jane Smith', age: 25, department: 'Marketing' }
        console.log(findEmployees(employees, 'John Doe')); // [ Employee { id: 1, name: 'John Doe', age: 30, department: 'Sales', isTransportAvail: true } ]
        console.log(findEmployees(employees, 'Alice Brown')); // []