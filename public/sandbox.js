"use strict";
// Part 1
const me = "alex";
console.log(me);
const inputs = document.querySelectorAll("input");
console.log(inputs);
// for this code to be understood by the browser must first compile it
inputs.forEach((input) => {
    console.log(input);
});
// i can do tsc sandbox.ts -w , so everytime i make a change it will recompile but i will do it manually for a bit
//Part 2
// this can take any type because its not specified
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2));
// to specify the type just add :number or :string or :boolean
// allows us to typecheck during development. so the browser does not know
//Part 3
//ctrl / for lines
// ctrl shift a for multiline
let names = ["luigi", "mario", "yoshi"];
//cannot push different types
names.push("toad");
// names.push(3);
// names[0]= true;
//since its first declared as mixed it can now accept any and be swapped number or string
let mixed = ["alex", 3, "hello"];
mixed.push("red");
mixed.push(3);
mixed[1] = "bro";
//Part 4
//creating an object
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age='yo';
// ninja.skills = ['fightihg','jumping'];
// i can redo the whole object but it must have matching properties
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40, //if i comment out age it will not work
};
//Part 5 explicit types
let character; // only allowing string
let age;
let isLoggedIn;
// age ='luigi'  cannot apply string because its a number
age = 30;
isLoggedIn = true;
//arrays
let ninjas = []; // can only be array of strings
// must need =[] in order to push something into the array
ninjas = ["yoshi", "mario"];
ninjas.push("bad");
console.log(ninjas);
//union types
//could be 1 or 3 types
let mixedArray = []; // can now store string or numbers
mixedArray.push("hello", 0);
// mixedArray.push(true); wont work unles string | number | boolean
console.log(mixedArray);
let uid; // can be either does nt need parenthesis
uid = "yes";
uid = 3;
//objects
let ninjaOne;
ninjaOne = {
    name: "yoshi",
    age: 30,
};
ninjaOne = []; // this would work because array is type of object.
let ninjaTwo;
// now we created an object but it must have these properties and explicit types.
// assigning
ninjaTwo = { name: "alex", age: 30, beltColour: "red" };
// cannt add on any extra properties
//Part 6 Dynamic (any) Types
let ageDynamic = 25;
ageDynamic = true;
ageDynamic = "hello";
ageDynamic = { name: "luigi" };
ageDynamic = [];
let mixedDynamic = [];
mixedDynamic.push(5);
mixedDynamic.push("yo");
mixedDynamic.push(false);
console.log(mixedDynamic);
// when declaring object type use :
// careful when using this because types can get mixed.
let dynamicNinja;
dynamicNinja = { name: "yoshi", age: 22 };
console.log(dynamicNinja);
dynamicNinja = { name: "burger", age: 2 };
console.log(dynamicNinja);
// Part 7 Better Workflow & tsconfig
console.log("testing");
