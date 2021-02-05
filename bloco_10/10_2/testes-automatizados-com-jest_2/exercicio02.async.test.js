const { getUserName } = require('./exercicio02.js');

test('Verifica se o nome existe com async/await', async () => {
    const getName = await getUserName('4');
    expect(getName).toBe('Mark');
});