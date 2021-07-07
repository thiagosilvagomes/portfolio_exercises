const { encode, decode } = require('./challenges.js');

test('encode the vogals', () => {
    expect(encode('aeiou')).toEqual('12345');
});

test('decode the vogals', () => {
    expect(decode('12345')).toEqual('aeiou');
});

test('verify if encode is a function', () => {
    expect(encode('thiago')).toBeTruthy();
});

test('verify if decode is a function', () => {
    expect(decode('thiago')).toBeTruthy();
});

test('verify if other characters are not converted', () => {
    expect(encode('cdfghj')).toEqual('cdfghj');
});

test('verify if other characters are not converted', () => {
    expect(decode('67890')).toEqual('67890');
});

test('verify if the string converted has the same number of characters than the entered one', () => {
    expect(encode('thiago')).toHaveLength(encode('thiago').length)
});

test('verify if the string converted has the same number of characters than the entered one', () => {
    expect(decode('123456')).toHaveLength(decode('123456').length)
});