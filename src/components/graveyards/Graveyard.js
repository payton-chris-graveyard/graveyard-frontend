import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Graveyard({ graveyard }) {
  return (
    <div>
      <Link to={`/${graveyard.id}`}>
        <p>{graveyard.name}</p>
      </Link>
    </div>
  );
}

Graveyard.propTypes = {
  graveyard: PropTypes.object.isRequired
};

export default Graveyard;
