import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import { Link } from 'react-router-dom';

const PokeList = props => {
  const { pokemones, query } = props
  return (
    <ul className='pokemones'>
      {pokemones
        .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(pokemon => {
          return (
            <li className='pokemon' key={pokemon.id}>
              <Link to={`/poke-detail/${pokemon.id}`} className='pokemon__link'>
                <PokeCard
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </Link>
            </li>
          )
        })}
    </ul>)
}

PokeList.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeList;