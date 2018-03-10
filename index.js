// create Map from an array

const data = [{1: 2},{3: 4}].map((item, index) => [index, item]);

// [
//     [index, value],
//     [index, value],
// ]

const map = Immutable.Map(data);

console.log(0, map.get(0)); // {1,2}
console.log(1, map.get(1)); // {3,4}