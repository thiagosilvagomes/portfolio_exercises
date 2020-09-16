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
    ingredientListItem.innerText = ingredientItems[index];
     // Atribui o valor do vetor na posicao index ao elemento criado anteriormente
    ingredientListItem.className = 'ingredients-list-item';
    ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item')

for (let index=0; index < ingredientListItems.length; index++)
{
    let element = ingredientListItems[index];
    if (element.innerText.includes('toucinho'))
    {
        ingredientList.removeChild(element);
    }
}