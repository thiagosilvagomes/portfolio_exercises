let i=1;
let j=0;
let array = [4,3,8,6,1,9];
for (i = 1; i < array.length; i++) {
  for (j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}