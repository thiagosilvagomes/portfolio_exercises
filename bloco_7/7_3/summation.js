//somatorio de 5 === 5+4+3+2+1 === 15
//somatorio de 3 === 3+2+1 === 6

const assert = require ("assert");

const summationOf = (number) => {
    let summation = null;
    for (let index = 1; index <= number; index +=1)
    {
        summation +=index;
    }
    return summation;
}

assert.strictEqual(typeof(summationOf), "function", "Resultado ruim");
assert.strictEqual(summationOf(1),1);
assert.strictEqual(summationOf(3),6);
assert.strictEqual(summationOf(5),15);

assert.throws(() => {
    //algum codigo que deve levantar exceção. Ou seja, dar erro. 
    
});