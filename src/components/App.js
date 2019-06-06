import React from 'react';
import Grave from './graves/Grave';

export default function App() {
  // const graveyardList = [
  //   {
  //     name: 'Motel 666',
  //     id: '1abc'
  //   }, {
  //     name: 'Hotel California',
  //     id: 'shoop3'
  //   }
  // ];

  const grave = {
    occupied: false,
    occupant: {
      name: 'Tom'
    }
  };

  return (
    < Grave grave={grave} />
  );
}
