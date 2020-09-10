let string="arara"
function verificaPalindromo(string)
{
    let inverte=[],inverte2="";
    let j=string.length;
    inverte=string.split('');
    let palindromo=false;
    for (let i=j-1;i>=0;i-=1)
    {
        inverte2=inverte2+inverte[i];
    }
    if(string==inverte2){
        palindromo=true;
    }
    else{
        palindromo=false;
    }
    return(palindromo);
}
console.log(verificaPalindromo(string));