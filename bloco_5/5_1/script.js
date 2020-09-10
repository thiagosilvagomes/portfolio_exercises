console.log(document.getElementById("teste"));
// Recebe como parametro um ID. Pesquisou pelo ID teste dentre os elementos que tem na pagina e retornou todo o conteudo da D i v .
console.log(document.getElementById("teste").innerHTML);
// Acessa o conteúdo do parágrafo. Retorna todo o TEXTO (inclusive as tags) do HTML.
console.log(document.getElementById("teste").innerText);
//Retorna o texto puro sem as tags. Retorna apenas o conteúdo.
console.log(document.getElementById("teste").style);
//Retorna todos os estilos aplicado naquele ID. 
// document.getElementById("teste").innerText = "Aprendizados da Aula de Hoje";