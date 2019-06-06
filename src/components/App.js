import React from 'react';
import GraveList from './graves/GraveList';

export default function App() {
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
