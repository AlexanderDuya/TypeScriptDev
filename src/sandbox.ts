// Part 1
const me = "alex";
console.log(me);
const inputs = document.querySelectorAll("input");
console.log(inputs);

// for this code to be understood by the browser must first compile it

inputs.forEach((input) => {
  console.log(input);
});
// i can do tsc sandbox.ts -w , or tsc -wso everytime i make a change it will recompile but i will do it manually for a bit

//Part 2
// this can take any type because its not specified
const circ = (diameter: number) => {
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
let character: string; // only allowing string
let age: number;
let isLoggedIn: boolean;

// age ='luigi'  cannot apply string because its a number
age = 30;
isLoggedIn = true;

//arrays
let ninjas: string[] = []; // can only be array of strings
// must need =[] in order to push something into the array
ninjas = ["yoshi", "mario"];
ninjas.push("bad");
console.log(ninjas);

//union types
//could be 1 or 3 types
let mixedArray: (string | number)[] = []; // can now store string or numbers
mixedArray.push("hello", 0);
// mixedArray.push(true); wont work unles string | number | boolean
console.log(mixedArray);

let uid: string | number; // can be either does nt need parenthesis
uid = "yes";
uid = 3;

//objects
let ninjaOne: object;

ninjaOne = {
  name: "yoshi",
  age: 30,
};
ninjaOne = []; // this would work because array is type of object.

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};
// now we created an object but it must have these properties and explicit types.
// assigning
ninjaTwo = { name: "alex", age: 30, beltColour: "red" };
// cannt add on any extra properties

//Part 6 Dynamic (any) Types
let ageDynamic: any = 25;
ageDynamic = true;
ageDynamic = "hello";
ageDynamic = { name: "luigi" };
ageDynamic = [];

let mixedDynamic: any[] = [];
mixedDynamic.push(5);
mixedDynamic.push("yo");
mixedDynamic.push(false);
console.log(mixedDynamic);

// when declaring object type use :
// careful when using this because types can get mixed.
let dynamicNinja: { name: any; age: any };
dynamicNinja = { name: "yoshi", age: 22 };
console.log(dynamicNinja);

dynamicNinja = { name: "burger", age: 2 };
console.log(dynamicNinja);

// Part 7 Better Workflow & tsconfig
console.log("testing");
// add this to bottom of tsconfig.json "include": ["src"]
// uncomment and add "outDir": "./public" and "rootDir": "./src"
// basically saying that I want any ts file in src to be converted to js in the public file for the browser.
// to get tsconfig.json do tsc --init. do tsc -w to not have to save
// src is for ts and public is for js

//Part 8 Function Basics
let greet = () => {
  console.log("hello there");
};

console.log(greet);

//we can do
let greet2: Function;
greet2 = () => {
  console.log("I replaced the greet");
};

console.log(greet2);
greet2();

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};
add(5, 10);
//what if i wanted an optional parameter
//all you do is add it then put ? and u can still say if its more than 1 type for example number or string by using the pipe
//default parameter by just using = . use either = or ?.
//if yo use ? then it will beundefined if you use = not ? then it will be what you assign it
// this is like explicity doing:void if no return type

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
// result wil be the type of what has been returned in the function
// to explicity declare the type add a colon like normal. but we dont have to do it but it might be good
// good for other developers
