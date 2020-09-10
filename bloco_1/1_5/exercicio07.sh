#!/bin/bash
clear
read -p "Digite o caminho completo do diretorio ou arquivo: " CAMINHO
if [ -d $CAMINHO ]; then
    ARQ=$(ls -l $CAMINHO | wc -l)
    echo "Este diretorio ($CAMINHO) tem $ARQ arquivos contidos nele"
else
    echo "O argumento $CAMINHO nao eh um diretorio"
fi
