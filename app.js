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
let myFullName = "First Name:\t${myFirstName}\nLast Name:\t${myLastName}";

let fullName = myFirstName + " " + myLastName;



console.log(myFullName);