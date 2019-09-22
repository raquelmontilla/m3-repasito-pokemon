import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';

const PokeList = props => {
  const { pokemones, query } = props
  return (
    <ul className='pokemones'>
      {pokemones
        .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(pokemon => {
          return (
            <li className='pokemon' key={pokemon.id}>
              <PokeCard
                name={pokemon.name}
                url={pokemon.url}
              />
            </li>
          )
        })}
    </ul>)
}

PokeList.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeList;