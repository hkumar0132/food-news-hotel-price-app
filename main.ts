export {}
let message = "Welcome Back";
console.log(message);

let name : string = "Himanshu";
let digit : number = 0;
let isBeginner : boolean = true;

let sentence : string = 'My name is ' + name + '.Beginner = ' + isBeginner;

console.log(sentence);

let n : null = null;
let u : undefined = undefined;

let isNull : boolean = null;
let myName : number = undefined;

let list1 : number[] = [1, 2, 3, 4, 5, 6];
let list2 : Array<number> = [1, 2, 3, 4, 5, 6];

console.log(list1);
console.log(list2);

let tup : [string, number, boolean] = ["Himanshu Kumar", 1, true];

enum Color {Red = 5, Green, Blue, Yellow}
console.log(Color.Red);
let c : Color = Color.Green;
console.log(c);

//any type -> IntelliSense do not know the type so it 
//can will not give error for any type of fn we are using
//with the variable

let something : any = 10;
// something.name;
// something.toUpperCase();
// something();

// function hasName(obj : any) :  obj is {name : string} {
//     return !!obj && typeof obj === "object" && "name" in obj;
// }

// //unknown type 
let s : unknown = 10;
// if(hasName(s))
//     console.log(s.name);

// (s as string).toUpperCase();

//Type inference does not work during declaration only
let a;
a = 20;
// a.toUpperCase(); -> works because a is not read as any type

//It works when we initialize the variable
let b = 200;
// b.toUpperCase(); -> Not valid because b is read as number

let multiType : number | boolean;
multiType = 20;
multiType = true;

function add(num1 : number, num2 : number) : number { //return type is number
    return num1+num2;
}

console.log(add(10, 20));
console.log(add(10.0, 20.0));

function sub(num1 : number, num2? : number) : number {
    if(num2)
        return Math.abs(num1-num2);
    return num1;
}

console.log(sub(1, 2));
console.log(sub(1)); //num2 is optional (notice the ? there)

function mul(num1 : number, num2 : number = 20) : number {
    return num1*num2;
}

console.log(mul(3, 5));
console.log(mul(3));

// function fn(person : {firstName : string, lastName : string}){
//     console.log(person.firstName + " " + person.lastName);
// }

// let p = {
//     firstName : "Himanshu", 
//     lastName : "Kumar"
// };

// fn(p);

//If person contains multiple fields, we can use interfaces

interface Person {
    firstName : string,
    lastName? : string
}

function fn(person : Person) {
    if(person.lastName)
        console.log(person.firstName, person.lastName);
    else    
        console.log(person.firstName);
}

let p = {
    firstName : "Himanshu",
    // lastName : "Kumar"
};

fn(p);
