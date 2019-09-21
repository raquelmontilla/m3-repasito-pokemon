import React from 'react';
import './App.css';
import { fetchPokemon } from './service/fetchPokemones';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: []
    }
  }

  componentDidMount() {
    this.getPokemones();
  }

  getPokemones() {
    fetchPokemon()
      .then(data => {
        this.setState({
          pokemones: data
        })
      })
  }

  render() {
    const { pokemones } = this.state;
    return (
      <div className='app' >
        <h1 className='app__title'>Mi lista de Pokemones</h1>
        < PokeList pokemones={pokemones} />


      </div>
    );
  }
}

export default App;
