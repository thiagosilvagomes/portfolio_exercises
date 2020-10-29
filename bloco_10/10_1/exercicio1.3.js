function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        len -= 1;
      }
    }
  
    return arr;
  }

  console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));

  module.exports = myRemoveWithoutCopy;