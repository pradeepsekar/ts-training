//string
var ename: string = "";
//number
var age: number = 1.0;
//boolean
var isStudent: boolean = true;

var date: Date = new Date();
//any
var anything: any = "";
anything = 1;
//array of string
var tempArray: Array<string> = ["a", "b"];
//tuple
var tempArray1: [string, boolean] = ["a",  true];
// var vs let - scopes
let index: number = 100; //100
console.log(index); //100
if(true)
{
    let index = 125;
    console.log(index); //125
}
console.log(index); //100 - expected
//functions
function addNumbers(num1 : number, num2 : number = 10, num3?: number) : number
{
    return num1 + num2;
}

let sumValue : number = addNumbers(5, 25);
console.log(sumValue);

// implicit types
var studentName;
studentName = "Jane";
studentName = 10;

//explicit typing
var student1 = "John";
student1 = 100;

// union types
let sampleArray: Array<string | number> = 
            ["john", "jane", "doe"];

class TestClass
{

public test: string = "abc";
    constructor(private name: string)
    {  }

    getName(): string
    {
        return this.name;
    }

    getTest(): string{
        return this.test;
    }

    getSomething() {

    }
}

let sample: TestClass = new TestClass("John");
console.log(sample.getName());

let samples: Array<TestClass | string> = 
[new TestClass(""), new TestClass(""), ""];

// interface
export interface student{
name: string;


}


for(let ind = 0; ind < 10; ind++)
{

}


class SampleClass1 implements student{
    readonly test: string = "sample";
    
name: string = "";
age = 10;
getGrades(): number 
{
    const sample: string = "";
    return 5;
}
}
let sampleVariable1: student = new SampleClass1();
sampleVariable1.name;

let sampleVariable: student = {name: "John"};

enum DAYS
{
    SUN = 5, MON, TUE = 10
}

class SuperClass
{
    getMyName()
    {
        console.log("this is from super class");
    }
}

class ChildClass extends SuperClass
{
    getMyName()
    {
        console.log("From child class...");
        super.getMyName();
    }
}

let paretOrChild: SuperClass = new ChildClass();
paretOrChild.getMyName();

function addSomething<U>(input1: U) : U
{
    return input1;
}

let testResult :string = addSomething("");
let childObj: ChildClass = addSomething(new SuperClass());

import {FirstModule} from './testmodule';

class Temp{
    something()
    {
       new FirstModule.Class1.somefunctionality();
    }
}

new Temp().something();

let sampleArras: string[] = ["a", "b", "c"];
sampleArras.forEach(element => {
    console.log(element);
});