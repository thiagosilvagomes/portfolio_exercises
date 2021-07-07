import React from 'react';
import Pokemon from './pokemon'

class PokemonList extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <div>
        {data.map((poke, index) => <Pokemon pokeInfo={poke} key={index}/>)}
      </div>
    )
  }
}

export default PokemonList;