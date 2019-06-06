import React from 'react';
import GraveList from './graves/GraveList';

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

  const graveList = [
    {
      occupied: false,
      occupant: {
        name: 'Tom'
      }
    }, {
      occupied: true,
      occupant: {
        name: 'Jerry'
      }
    }
  ];

  return (
    < GraveList graveList={graveList} />
  );
}
