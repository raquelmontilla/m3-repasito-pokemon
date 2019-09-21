import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';

const PokeList = props => {
  const { pokemones } = props
  return (
    <ul className='pokemones'>
      {pokemones.map(pokemon => {
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