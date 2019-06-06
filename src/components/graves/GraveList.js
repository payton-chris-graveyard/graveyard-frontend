import React from 'react';
import PropTypes from 'prop-types';
import Grave from './Grave';

function GraveList({ graveList }) {
  const listItem = graveList.map(grave => (
    <li key={grave.id}>
      <Grave grave={grave} />
    </li>
  ));

  return (
    <ul>
      {listItem}
    </ul>
  );
}

GraveList.propTypes = {
  graveList: PropTypes.array.isRequired
};

export default GraveList;
