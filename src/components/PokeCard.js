import React from 'react';
import PropTypes from 'prop-types';

const PokeCard = props => {
  const { name, url } = props
  return (
    <div className='card'>
      <h2 className='card__name'>
        {name}
      </h2>
      <div className='card__img'>
        <img src={url} alt={name} />
      </div>
    </div>
  )
}

PokeCard.protoTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default PokeCard;