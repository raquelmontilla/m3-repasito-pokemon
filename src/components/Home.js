import React, { Fragment } from 'react';
import PokeList from './PokeList';
import Filters from './Filters';
import PropTypes from 'prop-types';

const Home = props => {
  const { getUserQuery, query, pokemones } = props;
  return (
    <Fragment>
      <Filters
        getUserQuery={getUserQuery}
        query={query} />

      <PokeList
        pokemones={pokemones}
        query={query} />

    </Fragment>
  )
};

Home.protoTypes = {
  getUserQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default Home;