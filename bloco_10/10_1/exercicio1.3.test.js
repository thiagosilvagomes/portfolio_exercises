const { expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./exercicio3');

test ('[1, 2, 3, 4], 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
});

test ('[1, 2, 3, 4], 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
test ('Se sofreu alteracoes', () => {
    const arr = [1,2,3,4];
    myRemoveWithoutCopy(arr, 1)
    expect(arr).toEqual([2,3,4]);
});

test('[1, 2, 3, 4], 5', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
});