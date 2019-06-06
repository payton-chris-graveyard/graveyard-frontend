import React from 'react';
import PropTypes from 'prop-types';
import UpdateGrave from '../../containers/graves/UpdateGrave';

function GraveDetail({ graveDetail }) {
  const {
    occupied,
    name,
    dob,
    dod,
    causeOfDeath,
    epitaph,
    graveyard
  } = graveDetail;

  if(!occupied) {
    return (
      <UpdateGrave />
    );
  } else {
    return (
      <section>
        <h2>{name}</h2>
        <h3>{graveyard}</h3>
        <ul>
          <li>{dob}</li>
          <li>{dod}</li>
          <li>{causeOfDeath}</li>
        </ul>
        <p>{epitaph}</p>
      </section>
    );
  }
}

GraveDetail.propTypes = {
  graveDetail: PropTypes.object.isRequired
};

export default GraveDetail;
