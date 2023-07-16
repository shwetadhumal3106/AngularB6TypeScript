"use strict";
// let p="Hello TypeScript"
// console.warn(p);
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var Std = new Student_1.default();
console.warn(Std.data);
var teach = new Teacher_1.default();
console.warn(teach.data);
