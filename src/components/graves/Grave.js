import React from 'react';
import PropTypes from 'prop-types';

function Grave({ grave }) {
  if(!grave.occupied) {
    return (
      <>
        <img src="src/assets/grave-unoccupied.jpg" alt="Unoccupied grave" />
        <p>Unoccupied Grave</p>
      </>
    );
  } else {
    return (
      <>
        <img src="src/assets/grave-occupied.jpg" alt="Occupied grave" />
        <p>{grave.occupant.name}</p>
      </>
    );
  }
}

Grave.propTypes = {
  grave: PropTypes.object.isRequired
};

export default Grave;
