#!/bin/bash

PATH="/home/thiagosg/Exercicios/teste"
if [ -e "$PATH" ]
then
    echo "O caminho $PATH esta habilitado"
else
    echo "O caminho $PATH NAO esta habilitado"
fi
if $PATH -w
then 
    echo "Voce tem permissao para editar"
else
    echo "Voce nao tem permissao para editar"
fi