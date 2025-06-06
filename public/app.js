//eg:
const alex = {
    name: "alex",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(number) {
        console.log("I spent", number);
        return number;
    },
};
console.log(alex);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(alex);
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "webwork", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
//Part 11
const anchor = document.querySelector("a");
console.log(anchor.href);
// just console logging right after does not work because typescript is unaware of the html
// so you can eithe do if (anchor) then console. or add a ! like so
//const form = document.querySelector("form")!;
//we do not use ! with as
const form = document.querySelector(".new-item-form");
//console.log(form.children);
// since we changed the type to HTMLForm we now have the appropriate properties
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
let invoices = [];
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
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne1 = addUID({ name: "yoshi", age: 40 });
console.log(docOne1.name);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" }, // what if this was a string or number or anything it would be an error
};
const docThreeModified = {
    uid: 1,
    resourceName: "person",
    data: "shaun",
};
// basically we created the object and passed in that we want wherever T to be is a string. so data can now be a string whenever we need it to be
//but if i wanted it to be an object then just swap it to object and pass in an object
const docFour = {
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOneEnum = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR, // SEE we dont use number anymore we can do this
    data: { title: "name of the wind" },
};
const docTwoEnum = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log(docOneEnum, docTwoEnum);
