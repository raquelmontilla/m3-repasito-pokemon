import React from 'react';
import './App.css';
import { fetchPokemon } from './service/fetchPokemones';
import PokeList from './components/PokeList';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ''
    }
    this.getUserQuery = this.getUserQuery.bind(this);
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

  getUserQuery(event) {
    const query = event.currentTarget.value;
    this.setState({
      query: query
    })
  }

  render() {
    const { pokemones, query } = this.state;
    return (
      <div className='app' >
        <h1 className='app__title'>Mi lista de Pokemones</h1>
        < label > Buscador: </label>
        <Filters
          getUserQuery={this.getUserQuery}
          query={query} />

        < PokeList
          pokemones={pokemones}
          query={query} />


      </div >
    );
  }
}

export default App;
