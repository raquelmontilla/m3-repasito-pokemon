import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokeDetail = props => {
  const { routerProps, pokemones } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId)
  const pokemon = pokemones.filter(item => item.id === pokeId);

  const { name, url, types } = pokemon[0];
  return (

    <Fragment>
      <div className="poke-detail">
        <h2 className="poke-detail__name">{name}</h2>
        <div className="poke-detail__img">
          <img src={url} alt={name} />
        </div>
        <ul className="poke-detail__types">
          {types.map((type, index) => {
            return (
              <li className="poke-detail__type" key={index}>{type}</li>
            );
          })}
        </ul>
      </div>
    
  );
  
  <Link to='/' className='app__back'>Volver al listado</Link>
    </Fragment >
  )
}

PokeDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeDetail;