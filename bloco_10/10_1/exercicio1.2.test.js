const { expect, test } = require('@jest/globals');
const myRemove  = require ('./exercicio2');

test('[1,2,3,4], 3 - Remoção do 3', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
});

test('[1,2,3,4], 3 - Verificar o contrario', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
});

test('[1,2,3,4], 1 - Verificar se sofreu alteracoes', () => {
    const arr = [1,2,3,4];
    myRemove(arr, 1);
    expect(arr).toEqual([1,2,3,4]);
});

test('[1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
});