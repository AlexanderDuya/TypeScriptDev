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
