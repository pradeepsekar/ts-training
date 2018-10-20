"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
var ename = "";
//number
var age = 1.0;
//boolean
var isStudent = true;
var date = new Date();
//any
var anything = "";
anything = 1;
//array of string
var tempArray = ["a", "b"];
//tuple
var tempArray1 = ["a", true];
// var vs let - scopes
let index = 100; //100
console.log(index); //100
if (true) {
    let index = 125;
    console.log(index); //125
}
console.log(index); //100 - expected
//functions
function addNumbers(num1, num2 = 10, num3) {
    return num1 + num2;
}
let sumValue = addNumbers(5, 25);
console.log(sumValue);
// implicit types
var studentName;
studentName = "Jane";
studentName = 10;
//explicit typing
var student1 = "John";
student1 = 100;
// union types
let sampleArray = ["john", "jane", "doe"];
class TestClass {
    constructor(name) {
        this.name = name;
        this.test = "abc";
    }
    getName() {
        return this.name;
    }
    getTest() {
        return this.test;
    }
    getSomething() {
    }
}
let sample = new TestClass("John");
console.log(sample.getName());
let samples = [new TestClass(""), new TestClass(""), ""];
for (let ind = 0; ind < 10; ind++) {
}
class SampleClass1 {
    constructor() {
        this.test = "sample";
        this.name = "";
        this.age = 10;
    }
    getGrades() {
        const sample = "";
        return 5;
    }
}
let sampleVariable1 = new SampleClass1();
sampleVariable1.name;
let sampleVariable = { name: "John" };
var DAYS;
(function (DAYS) {
    DAYS[DAYS["SUN"] = 5] = "SUN";
    DAYS[DAYS["MON"] = 6] = "MON";
    DAYS[DAYS["TUE"] = 10] = "TUE";
})(DAYS || (DAYS = {}));
class SuperClass {
    getMyName() {
        console.log("this is from super class");
    }
}
class ChildClass extends SuperClass {
    getMyName() {
        console.log("From child class...");
        super.getMyName();
    }
}
let paretOrChild = new ChildClass();
paretOrChild.getMyName();
function addSomething(input1) {
    return input1;
}
let testResult = addSomething("");
let childObj = addSomething(new SuperClass());
const testmodule_1 = require("./testmodule");
class Temp {
    something() {
        new testmodule_1.FirstModule.Class1.somefunctionality();
    }
}
new Temp().something();
let sampleArras = ["a", "b", "c"];
sampleArras.forEach(element => {
    console.log(element);
});
