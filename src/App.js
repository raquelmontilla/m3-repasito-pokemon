import React from 'react';
import './App.css';
import { fetchPokemon } from './service/fetchPokemones';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';


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

        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Home
                getUserQuery={this.getUserQuery}
                query={query}
                pokemones={pokemones}
              />
            )
          }} />
          <Route path='/poke-detail'
            component={PokeDetail} />

        </Switch>

      </div >
    );
  }

}

export default App;
