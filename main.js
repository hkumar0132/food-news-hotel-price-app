"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
var name = "Himanshu";
var digit = 0;
var isBeginner = true;
var sentence = 'My name is ' + name + '.Beginner = ' + isBeginner;
console.log(sentence);
var n = null;
var u = undefined;
var isNull = null;
var myName = undefined;
var list1 = [1, 2, 3, 4, 5, 6];
var list2 = [1, 2, 3, 4, 5, 6];
console.log(list1);
console.log(list2);
var tup = ["Himanshu Kumar", 1, true];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
    Color[Color["Yellow"] = 8] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Red);
var c = Color.Green;
console.log(c);
//any type -> IntelliSense do not know the type so it 
//can will not give error for any type of fn we are using
//with the variable
var something = 10;
// something.name;
// something.toUpperCase();
// something();
// function hasName(obj : any) :  obj is {name : string} {
//     return !!obj && typeof obj === "object" && "name" in obj;
// }
// //unknown type 
var s = 10;
// if(hasName(s))
//     console.log(s.name);
// (s as string).toUpperCase();
//Type inference does not work during declaration only
var a;
a = 20;
// a.toUpperCase(); -> works because a is not read as any type
//It works when we initialize the variable
var b = 200;
// b.toUpperCase(); -> Not valid because b is read as number
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
console.log(add(10.0, 20.0));
function sub(num1, num2) {
    if (num2)
        return Math.abs(num1 - num2);
    return num1;
}
console.log(sub(1, 2));
console.log(sub(1)); //num2 is optional (notice the ? there)
function mul(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 * num2;
}
console.log(mul(3, 5));
console.log(mul(3));
function fn(person) {
    if (person.lastName)
        console.log(person.firstName, person.lastName);
    else
        console.log(person.firstName);
}
var p = {
    firstName: "Himanshu"
};
fn(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
        this.greet();
    }
    Employee.prototype.greet = function () {
        console.log("My name is " + this.empName);
    };
    return Employee;
}());
// let emp1 = new Employee("Himanshu");
// console.log(emp1.empName);
// emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegates work");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce Wayne");
m1.delegateWork();
console.log(m1.empName);
