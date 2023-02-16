const magicNumber = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 7; i++) {
  const input = prompt("The magic number is:");
  if (isNaN(input) || input === null) {
    alert(`The input is not a number, you have ${6 - i} tries left`);
    continue;
  }
  if (parseInt(input) === magicNumber) {
    alert(`You won in ${i + 1} tries!`);
    break;
  } else if (6 - i !== 0) {
    alert(
      `The magic number is ${
        magicNumber < input ? "lesser" : "greater"
      } than ${input}. You have ${6 - i} tries left.`
    );
  }
  if (i === 6) alert(`You lost the magic number was ${magicNumber}`);
}
