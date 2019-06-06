// FIX FETCH ID AND LOCATION OBJECT

export const getGraveyardList = () => {
  return fetch('URL!!!!')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    })
    .then(json => json.map(graveyard => ({
      id: graveyard._id,
      name: graveyard.name,
      location: { LOOK_AT_OBJECT: 'OK' },
      total: graveyard.total,
      occupied: graveyard.occupied
    })));
};
