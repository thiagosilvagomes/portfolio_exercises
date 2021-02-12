import React from 'react';
import Pokemon from './pokemon'

class PokemonList extends React.Component {
    render () {
        return (
            <div>
                {this.props.data.map((poke, index) => <Pokemon pokeInfo={poke} key={index}/>)}
            </div>
        )
    }
}

export default PokemonList;