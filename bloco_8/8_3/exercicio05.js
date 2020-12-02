
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const letterA = names.reduce((acc, curr, index) => {
    for (let i = 0; i < curr[index].length; i++){
            
        console.log(curr[index].length);
    }
    //curr[index].length
  });
    return (names[1][1]);
}

console.log(containsA());
//assert.deepStrictEqual(containsA(), 20);