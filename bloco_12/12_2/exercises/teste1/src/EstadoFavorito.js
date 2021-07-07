import React from 'react';
import './Form.css';

export default class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) error = "Texto muito grande!"

    return (<label>
      Seu estado favorito:
      <textarea name="estadoFavorito" value={value} onChange={handleChange} />
      <span>{error ? error : ''}</span>
    </label>
    )
  }
}

// O estado do pai é passado para o filho através de uma prop. O value no EstadoFavorito no form passa o valor do estado (this.state.EstadoFavorito) para a variável value a qual é absorvida aqui nesta classe através da desconstrucao na linha 6. E este valor é atribuido na linha 13, onde value={value}. O primeiro value é o valor do campo e o segundo value (entre chaves) é o valor do estado do elemento pai. 

//A funcao handlechange é passada por prop na desconstrucao na linha 6. A funcao é passada pelo pai através da prop handlechange que recebe a propria funcao e a mesma é atribuida no onchange aqui no campo na linha 13 e será executada lá no pai. Ela mudará o estado do componente pai. 

