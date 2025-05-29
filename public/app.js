"use strict";
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
