
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const letterA = names.reduce((acc, curr) => {
      acc + curr.split('').reduce((accumulator, current) => {
        if (current === 'a' || current === 'A'){
            return accumulator + 1;
        }
        return accumulator;
    },0);
},0);
return letterA;
}
console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);