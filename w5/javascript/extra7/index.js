function toArray(obj) {
  const toBeReturned = [];
  Object.keys(obj).forEach((key) => toBeReturned.push([key, obj[key]]));

  return toBeReturned;
}

console.log(toArray({ a: 1, b: 2 }));

console.log(toArray({ shrimp: 15, tots: 12 }));

console.log(toArray({}));
