import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PokeDetail = props => {
  return (
    <Fragment>
      <div className='/poke-detail'>Soy el detalle</div>
      <Link to='/' className='app__back'>Volver al listado</Link>
    </Fragment>
  )
}

export default PokeDetail;