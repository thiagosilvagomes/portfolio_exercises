let array = [2,3,6,7,10,1];
let maior=0;
let chave=0;

function maiorValorIndice(array)
{
    for (let key in array)
    {
        for (let key2 in array)
            if (array[key]>array[key2]){
                if (array[key]>maior){
                    maior=array[key];
                    chave=key;
                }
                else{
                    maior=maior;
                }
            }
            else
            {   
                if (array[key2>maior]){
                    maior=array[key2];
                    chave=key2;
                }
                else{
                    maior=maior;
                }
            }
    }
    return(chave);
}
console.log(maiorValorIndice(array))