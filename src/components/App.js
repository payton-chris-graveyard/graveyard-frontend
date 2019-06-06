import React from 'react';
import GraveyardList from './graveyards/GraveyardList';

export default function App() {
  const graveyardList = [
    {
      name: 'Motel 666',
      id: '1abc'
    }, {
      name: 'Hotel California',
      id: 'shoop3'
    }
  ];

  return (
    < GraveyardList graveyardList={graveyardList} />
  );
}
