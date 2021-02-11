import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayDeCompromissos = ["Fazer exercicios", "Versionar exercícios no GitHub", "Estudar o conteúdo", "Trabalhar cedo"];

function App() {
  return (
    <span>{arrayDeCompromissos.map((item)=> {
      return task(item);
    })}</span>
  );
}

export default App;
