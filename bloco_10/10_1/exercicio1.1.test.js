const sum  = require ('./exercicio1');

test('Sum 4 + 5 = 9', () => {
    expect(sum(4,5)).toBe(9);
});

test('Sum 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0);
});

test ('Error shown when string is passed', () => {
    expect(() => {
        sum(4,"5");
    }).toThrow();
});

test ('if the error message is "parameters must be numbers" then string is passed', () => {
    expect (() => {
        sum(4,"5");
    }).toThrow(/parameters must be numbers/);
});