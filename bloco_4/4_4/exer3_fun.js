let array = [2, 4, 6, 7, 10, 0, -3];
let menor=0;
let chave=0;

function menorValorIndice(array)
{
    for (let key in array)
    {
        for (let key2 in array)
            if (array[key]<array[key2]){
                if (array[key]<menor){
                    menor=array[key];
                    chave=key;
                }
                else{
                    menor=menor;
                }
            }
            else
            {   
                if (array[key2<menor]){
                    menor=array[key2];
                    chave=key2;
                }
                else{
                    menor=menor;
                }
            }
    }
    return(chave);
}
console.log(menorValorIndice(array))