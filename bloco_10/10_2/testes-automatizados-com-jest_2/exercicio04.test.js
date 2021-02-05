const { getRepos } = require('./exercicio04.js');

test ('Verifica se o sd-01-week4-5-project-todo-list existe no retorno da API', async () => {
    const getR = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(getR).toContain('sd-01-week4-5-project-todo-list');
});

test ('Verifica se o sd-01-week4-5-project-meme-generator existe no retorno da API', async () => {
    const getR = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(getR).toContain('sd-01-week4-5-project-meme-generator');
});


