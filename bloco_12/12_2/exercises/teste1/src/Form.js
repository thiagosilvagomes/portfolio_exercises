import React from 'react';
import './Form.css';
import EstadoFavorito from './EstadoFavorito.js'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      estadoFavorito: '',
      palavraChaveFavorita: '',
      erroEstadoFavorito: ''
    };
  }

  handleChange(event) {
    //const { name } = target; 
    // a variavel name é o nome do componente do evento
    const value = event.target.type === 'checkbox'? event.target.checked : event.target.value
    // a variavel value é o valor contido no campo de textarea que veio no evento onChange
    this.setState({
      [name]: value
    })
  }

  // Eu peguei esse elemento textarea: Quando ele sofrer uma alteração, ele dispara o evento onChange no campo textarea. E esse evento onChange vai pegar o valor inserido pela pessoa que tá usando e colocar no campo de estado. E o valor que vai aparecer no elemento, é o valor do estado. 

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrivel ou reagindo a regionalismos?</h1>
          <form className="form">

            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>

            <label>
              Nome: 
              <input name="nome" value={this.state.nome} onChange={this.handleChange} type="text" />
            </label>

            <label>
              Email:
              <input name="email" value={this.state.email} onChange={this.handleChange} type="email" />
            </label>

            <label>
              Idade:
              <input name="idade" value={this.state.idade} onChange={this.handleChange} type="number" />
            </label>

            <label>
              Vai comparecer?
              <input name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange} type="checkbox" />
            </label>
            
            <label>
              Escolha sua palavra-chave favorita: 
              <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
                <option value="estado">Estado</option>
                <option value="evento">Evento</option>
                <option value="Props">Props</option>
                <option value="Hooks">Hooks</option>
                <option value="Teste">Teste</option>
              </select>
            </label>

            <label>
              Arquivo: 
              <input type="file" />
            </label>

          </form>
        </div>
      ) 
    }
}

export default Form;
