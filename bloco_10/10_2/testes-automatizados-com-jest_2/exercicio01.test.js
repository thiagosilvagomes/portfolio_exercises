const { uppercase } = require('./exercicio01.js');

test('Teste upperCase', () => {
    const callback = (result) => {
        expect(result).toBe('TESTE')
    };
    uppercase('teste', callback);
})