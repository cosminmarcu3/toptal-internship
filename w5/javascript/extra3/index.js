const cipher = (string, index) => {
  if (index < 0 || index > 26)
    throw new Error("The index can not be lesser than 0 or greater than 26");

  let toBeReturned = "";

  for (const letter of string) {
    const newCode = letter.charCodeAt(0) + index;
    toBeReturned += String.fromCharCode(
      newCode > 122 ? 96 + newCode - 122 : newCode
    );
  }

  return toBeReturned;
};

console.log(cipher("abcdefghijklmnopqrstuvwxyz", 13));
