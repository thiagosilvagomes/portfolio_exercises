#!/bin/bash
clear
read -p "Digite o caminho do arquivo ou diretorio: " CAMINHO
echo $CAMINHO
if [ -e $CAMINHO ]
then
    echo "Este caminho eh valido <Pressione enter para continuar>"
else
    echo "Este caminho nao eh valido <Pressione enter para continuar>"
fi
read
clear
if [ -d $CAMINHO ]
then
    echo "Este caminho eh um diretorio <Pressione enter para continuar>"
else
    echo "Este caminho eh um arquivo <Pressione enter para continuar>"
fi
read
clear
ls -l $CAMINHO