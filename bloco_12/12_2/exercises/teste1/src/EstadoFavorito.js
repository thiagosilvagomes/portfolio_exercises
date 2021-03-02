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
