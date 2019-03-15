'use strict'

let myNumber = 10;
myNumber = 10e-1;
myNumber = 0x00F;
myNumber = 0o007;
myNumber = Infinity;
myNumber = Number;
let myString = "Alberto Botero";
let myBoolean = true;
let myObject = null;

let myUndefined = undefined;

let myFirstName = "Alberto";
let myLastName = "Botero";
let myFullName = `First Name:\t${myFirstName}\nLast Name:\t${myLastName}`;

let fullName = `${myFirstName} ${myLastName}`;

let a = 8;
let valueA = 10;
let valueB = 5;

const RED = Symbol();
const ORANGE = Symbol();
console.log('Value of RED is ' + RED.valueOf().toString());
console.log(RED === ORANGE);

var name = `Alberto Botero`;
console.log(`Hello, ${name}!`);
console.log( 5 == "5");

console.log('5 is equal to "5"?');
console.log( 5 === "5");

let total = valueA * valueB;
console.log(total);

console.log(myFullName);

let obj1 ={};

obj1.firstName = 'Alberto';
obj1.fullName = fullName;

console.log(obj1.fullName);

let obj2 = { firstName: "Erik", lastName: "Davis"};
obj2.fullName = function ()  {
  return this.firstName + ' ' + this.lastName;
}
console.group(obj1);

console.log(obj2.fullName());
console.log(obj2);

let myArray = [];

myArray.push("Alberto Botero");
myArray.push(48);

let myArray2 = ['Botero' , 45];
console.log(myArray[0]);
console.log(obj1['firstName']);
console.log(obj1.fullName);

let myBirthday = new Date(1970, 4, 10);
console.log(myBirthday.toJSON();