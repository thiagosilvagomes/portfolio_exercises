let listaDePessoasAprovadas = [
    'thiagosilvagomes@gmail.com',
    'juliana.oliveira@gmail.com',
    'ayrton.senna@gmail.com',
    'saint.germain@gmail.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com suce{sso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})