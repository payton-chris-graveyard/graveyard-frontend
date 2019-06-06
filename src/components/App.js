import React from 'react';
import Graveyard from './graveyards/Graveyard';

export default function App() {
  const graveyard = {
    name: 'Motel 666'
  };
  
  return (
    < Graveyard graveyard={graveyard} />
  );
}
