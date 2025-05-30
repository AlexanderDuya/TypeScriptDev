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

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
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
