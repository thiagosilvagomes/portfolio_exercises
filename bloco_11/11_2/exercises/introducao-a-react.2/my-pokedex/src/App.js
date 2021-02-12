import logo from './logo.svg';
import './App.css';
import data from './data';
import PokemonList from './pokemonList';

function App() {
  return (
    <div className="App">
      <PokemonList data={data} />
    </div>
  );
}

export default App;
