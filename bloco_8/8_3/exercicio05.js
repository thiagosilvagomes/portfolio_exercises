
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const letterA = names.reduce((acc, curr) => {
    acc + curr.split('').reduce((acc1, curr1) => {
        if ((curr1 === 'A') || (curr1 === 'a')){
            return acc1 + 1;
        }
        return acc1;
    },0)     
  },0)
  return letterA;
}
console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);