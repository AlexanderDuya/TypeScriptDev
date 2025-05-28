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
