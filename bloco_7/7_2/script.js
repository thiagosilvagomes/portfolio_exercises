const person = {
    //entradas = conjunto de chave e valor
    name: "cainan",
    lastName: "coutinho"
    fullName: function (){ //em algumas linguagens isso é chamado de computed property
        return `${this.name} ${this.lastName}`;
    }

};

//Existem duas formasde acessarmos os valores de uma propriedade.
//A primeira é por "."
console.log(`Olá, querido ${person.name}`);

//A segunda é por colchetes []
console.log(`Olá, querido ${person["name"]}`);

console.log(`Olá, querido ${person.fullName}`)

//Criar novas propriedades  dentro de um objeto
//A primeira é por . 
//A segunda é por []

person.address = {
    city: "Itapecerica"
}

person.address["estado"] = "São Paulo"

//crie um objeto em qye o index vai ser a chave desse objeto e o valor vai ser xablau para todas as entradas 

const object = {

}

for (let index=0; index < 10; index +=1)
{
    object.index = "XABLAU"; //Não funciona
    object[index] = "XABLAU";
}

console.table(object);

//capturar chaves de um objeto
console.log(Object.keys(person)); //retorna um array com as chaves

//capturar os valores de um objeto
console.log (Object.values(person)); //retorna um array com os valores
//comseguimos capturar todas as entradas

console.table(Object.entries(person)); //retorna um array de um array com chave, valor; chave, valor; ...

//conseguimos copiar um valor para um objeto

const car = {
    brand: "BMW",
    model: "Serie 3"
}
object.assign(person, car); //copia o valor de car para dentro do person 

