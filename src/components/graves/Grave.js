import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Grave({ grave }) {
  if(!grave.occupied) {
    return (
      <div>
        <Link to={`/${grave.id}`}>
          <img src="src/assets/grave-unoccupied.jpg" alt="Unoccupied grave" />
          <p>Unoccupied Grave</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={`/${grave.id}`}>
          <img src="src/assets/grave-occupied.jpg" alt="Occupied grave" />
          <p>{grave.occupant.name}</p>
        </Link>
      </div>
    );
  }
}

Grave.propTypes = {
  grave: PropTypes.object.isRequired
};

export default Grave;
