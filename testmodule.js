"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirstModule;
(function (FirstModule) {
    class Class1 {
        constructor() {
            console.log("Module's class constructor");
        }
        static somefunctionality() {
            console.log("from module 1");
        }
    }
    FirstModule.Class1 = Class1;
    class Class2 {
        constructor() {
            console.log("Module's class 2 constructor");
        }
        somefunctionality() {
            console.log("from module 1 class 2");
        }
    }
})(FirstModule = exports.FirstModule || (exports.FirstModule = {}));
