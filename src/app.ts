// interfaces
//we enforce structure onto objects and classes
//if we have a variable in the future of isPerson then it must have these properties no constructor
interface isPerson {
  // what properties an isPerson object has
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
//eg:

const alex: isPerson = {
  name: "alex",
  age: 20,
  speak(text: string): void {
    console.log(text);
  },
  spend(number: number): number {
    console.log("I spent", number);
    return number;
  },
};
console.log(alex);
const greetPerson = (person: isPerson) => {
  console.log("hello", person.name);
};
greetPerson(alex);

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "webwork", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

//Part 11
const anchor = document.querySelector("a")!;
console.log(anchor.href);
// just console logging right after does not work because typescript is unaware of the html
// so you can eithe do if (anchor) then console. or add a ! like so

//const form = document.querySelector("form")!;
//we do not use ! with as
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);
// since we changed the type to HTMLForm we now have the appropriate properties

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
  //console.log(doc);
});
// valueasnumber turns it into an actual number in the console its blue or purple

// Instantiate
const invOne = new Invoice("mario", "work on the website", 250);
const invTwo = new Invoice("Jeff", "work on the app", 350);

//console.log(invOne, invTwo);
//i could say the array can only hold Invoice objects from the class
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
//console.log(invoices);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

//since the attributes are public we can manually change them outside the class
//invOne.client = "yoshi";
//invTwo.client = "luigi";
//we can use access modifiers to prevent this eg public amount : number;
//if its private we cannot access it outside the class only within the class
//we can still access it through methods within the class example the format()
//readonly means we can only read it but we cannot change it in or outside the class. we can console etc

//if we want to assing properties straight away we can do this
/*
constroctor(
readonly client: string, 
private details: string,
public amount: number,){}

so we wont need:
readonly client: string;
and we wont need to do this.client = c;

its essentially a 2 in 1!
*/
//Module system only works with modern browsers. Issue is that it makes unecessary request but this can be solved with webpack

//GENEREICS
/*
Generics allow us to create reusable blocks of code that can be used with different types

*/

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne1 = addUID({ name: "yoshi", age: 40 });

console.log(docOne1.name);
//By putting <T> it captures whatever properties are in the object. now it will know its properties and now you can do docOne1.name
//But we need to specify its an object by saying it extends object. So now It can only be an object
//let docOne2 = addUID({'hello}) would not work
//we could even do extends {name: string}, only allowing this that have a name string property

//Can also be used with interfaces
//Interface defines how an object should look, what properties it must have
interface Resource {
  uid: number;
  resourceName: string;
  data: object;
}

const docThree: Resource = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" }, // what if this was a string or number or anything it would be an error
};
//instead we pass in the type by putting in <T> after Resource and data becomes : T

interface ResourceModified<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThreeModified: ResourceModified<string> = {
  uid: 1,
  resourceName: "person",
  data: "shaun",
};
// basically we created the object and passed in that we want wherever T to be is a string. so data can now be a string whenever we need it to be
//but if i wanted it to be an object then just swap it to object and pass in an object

const docFour: ResourceModified<string[]> = {
  uid: 2,
  resourceName: "shopping list",
  data: ["banana", "coconut"],
};

console.log(docThreeModified, docFour);
console.log(docFour.data);

//ENUMS
/*
Set of constants or keywords and associate them witha numeric value
Way to specify for example what 3 is it could be a book whilst 4 could be a manga

*/

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceEnum<T> {
  uid: number;
  resourceType: ResourceType; // so now instead of saying its a number its a resourcetype then access attribute
  data: T;
}

const docOneEnum: ResourceEnum<object> = {
  uid: 1,
  resourceType: ResourceType.DIRECTOR, // SEE we dont use number anymore we can do this
  data: { title: "name of the wind" },
};

const docTwoEnum: ResourceEnum<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};

console.log(docOneEnum, docTwoEnum);

//tuples
// fixed length fixed ypes

// an array
let arry = ["yo", 25, true];
arry[0] = false;

//tuple
let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = "ken";

let student: [string, number];
student = ["chun", 223423];
