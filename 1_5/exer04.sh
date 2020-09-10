#!/bin/bash
echo "Digite um caminho completo"
read CAMINHO
#echo $CAMINHO
if  [ -d $CAMINHO ];
then
    echo "O caminho "$CAMINHO" está habilitado"
    if [ -w $CAMINHO ];
    then
        echo "Você tem permissão de editar "$CAMINHO
    else
        echo "Você não tem permissão de editar "$CAMINHO
    fi
else
    echo "O caminho "$CAMINHO" não está habilitado"
fi