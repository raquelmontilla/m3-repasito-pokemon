import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokeDetail = props => {
  const { routerProps, pokemones } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId)
  const pokemon = pokemones.filter(item => { return item.id === pokeId });

  console.log(pokemon[0])

  return (
    <Fragment>
      <div className="poke-detail">
        <h2 className="poke-detail__name">{pokemon[0].name}</h2>
      </div>
      <div className="poke-detail__name">
        <img src={pokemon[0].url} alt={pokemon[0].name} />
      </div>

      <Link to='/' className='app__back'>Volver al listado</Link>
    </Fragment >
  )
}

PokeDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeDetail;