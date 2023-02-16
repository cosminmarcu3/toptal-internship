const first = () => {
  const result = [];
  Array.from(Array(100).keys())
    .map((element) => element + 1)
    .forEach((element) => {
      const divisibleBy5 = element % 5 === 0;
      const divisibleBy7 = element % 7 === 0;
      result.push(
        divisibleBy5 && divisibleBy7
          ? "PingPong"
          : divisibleBy5
          ? "Ping"
          : divisibleBy7
          ? "Pong"
          : element
      );
      console.log(result[result.length - 1]);
    });

  return result;
};

const second = (array) => {
  if (!Array.isArray(array))
    throw new Error("The provided argument must be an array");
  return array.join("");
};

console.log(second(first()));
