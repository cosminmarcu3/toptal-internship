const flattenArray = (array) => {
  let toBeReturned = [];

  for (const element of array) {
    if (element !== null) {
      if (Array.isArray(element)) {
        toBeReturned = toBeReturned.concat(flattenArray(element));
      } else {
        toBeReturned.push(element);
      }
    }
  }

  return toBeReturned;
};

console.log(flattenArray([1, [2, 3, null, 4], [null], 5]));

console.log(
  flattenArray([
    1,
    [2, 3, null, 4],
    [null, [null, [9, 9, 9], [5, [[1]], 3, 3]]],
    5,
  ])
);
