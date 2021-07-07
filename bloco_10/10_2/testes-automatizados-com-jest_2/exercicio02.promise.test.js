const { getUserName } = require('./exercicio02.js');

test('Verifica se o nome existe',() => {
    //expect.assertions(1);
    return getUserName('4').then(userID => {
        expect(userID).toBe('Mark');
    });
});