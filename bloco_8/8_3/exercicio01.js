
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten() {
  const unicoArray = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, []);
  return unicoArray;
}
console.log(flatten());
