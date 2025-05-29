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

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// valueasnumber turns it into an actual number in the console its blue or purple
