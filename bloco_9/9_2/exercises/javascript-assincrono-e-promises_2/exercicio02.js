const createArray = (() => {
    return new Promise ((resolve, reject) => {
        const arrayRandom = [];
        const length = 9;
        for (let cont = 0; cont <= length; cont++)
            arrayRandom[cont] = Math.round(Math.random(5)*50);
        const arrayAoQuadrado = arrayRandom.map((number) => {
            return (number * number);
        });
        const somatorio = arrayAoQuadrado.reduce((result, number) => result + number);
        if (somatorio <= 8000){
            resolve(somatorio);
        }
        else {
            reject(somatorio);
        }
    })
})
createArray()
    .then((soma) => {
        const divNumeros = [2,3,5,10];
        console.log(`Somatorio menor ou igual à 8000`);
        console.log(soma);
        return arrayResultDiv = divNumeros.map((number) => soma / number);
    })
    .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));