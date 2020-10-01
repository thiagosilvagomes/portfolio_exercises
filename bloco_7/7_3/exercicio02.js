const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;

}
const array = [1,2,3,4];
console.log(array);
assert(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.notDeepEqual(myRemove(array,));
assert(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
