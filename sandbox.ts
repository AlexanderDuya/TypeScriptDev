const me = "alex";
console.log(me);
const inputs = document.querySelectorAll("input");
console.log(inputs);

// for this code to be understood by the browser must first compile it

inputs.forEach((input) => {
  console.log(input);
});

// i can do tsc sandbox.ts -w , so everytime i make a change it will recompile but i will do it manually for a bit
