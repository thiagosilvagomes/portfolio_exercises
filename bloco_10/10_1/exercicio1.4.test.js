const { expect, test } = require('@jest/globals');
const myFizzBuzz = require('./exercicio4');

test('Divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('Divisivel por 3', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
});

test('Nao divisivel por 3 e 5', () => {
    expect(myFizzBuzz(7)).toEqual(7);
});

test ('String', () => {
    expect(myFizzBuzz('T')).toEqual(false);
})