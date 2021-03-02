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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

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
