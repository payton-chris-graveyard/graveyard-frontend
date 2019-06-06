import React from 'react';
import PropTypes from 'prop-types';
import Graveyard from './Graveyard';

function GraveyardList({ graveyardList }) {
  console.log('GraveyardList', graveyardList);
  const listItem = graveyardList.map(graveyard => (
    <li key={graveyard.id}>
      <Graveyard graveyard={graveyard} />
    </li>
  ));

  return (
    <ul>
      {listItem}
    </ul>
  );
}

GraveyardList.propTypes = {
  graveyardList: PropTypes.array.isRequired
};

export default GraveyardList;
