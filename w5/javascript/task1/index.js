const task1 = (input) => {
  if (typeof input !== "string")
    throw new Error("The provided parameter must be a string");
  input = input.split(" ");
  let toBeReturned = "";

  for (const string of input) {
    toBeReturned += string.length % 3 === 0 ? "0" : "1";
  }

  return toBeReturned;
};

console.log(task1("How are you?"));
console.log(task1("I used random words one two three"));
console.log(task1("'s up mate?"));
console.log(task1("Zac is here for you"));
