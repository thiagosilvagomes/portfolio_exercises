let ingredientItems = [
    "500g de feijão carioquinha cozido",
    "200g de toucinho",
    "1 concha de óleo",
    "1 cebola média picada",
    "4 dentes de alho",
    "5 ovos",
    "1 colher de sopa de sal com alho",
    "Cheiro verde a gosto",
    "200g de farinha de mandioca"
];

let ingredientList = document.querySelector('.ingredients-list');
for (let index=0; index < ingredientItems.length; index++)
{
    let ingredientListItem = document.createElement('li'); //Cria o tópico da lista
    ingredientListItem.innerText = ingredientItems[index]; // Atribui o valor do vetor na posicao index ao elemento criado anteriormente
    ingredientList.appendChild(ingredientListItem);
}