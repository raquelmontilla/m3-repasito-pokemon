import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const { getUserQuery, query } = props
  return (
    <div className='app__filters'>
      <input type='text' onChange={getUserQuery} value={query} />
    </div>
  )
}
Filters.protoType = {
  getUserQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}
export default Filters;