import React from 'react';
import PropTypes from 'prop-types';
import UpdateGrave from '../../containers/graves/UpdateGrave';
import ClearGraveDetails from './ClearGraveDetails';

function GraveDetails({ graveDetails }) {
  const {
    occupied,
    name,
    dob,
    dod,
    causeOfDeath,
    epitaph,
  } = graveDetails;

  if(!occupied) {
    return (
      <UpdateGrave />
    );
  } else {
    return (
      <section>
        <h2>{name}</h2>
        <ul>
          <li>Date of Birth: {dob}</li>
          <li>Date of Death: {dod}</li>
          <li>Caust of Death: {causeOfDeath}</li>
        </ul>
        <p>{epitaph}</p>
        <ClearGraveDetails />
      </section>
    );
  }
}

GraveDetails.propTypes = {
  graveDetails: PropTypes.object.isRequired
};

export default GraveDetails;
