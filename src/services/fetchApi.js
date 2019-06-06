// LINE 4 13 20 31

export const getGraveyardList = () => {
  // return fetch('URL!!!!')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch graveyard list';
      return json;
    })
    .then(json => json.map(graveyard => ({
      id: graveyard._id,
      name: graveyard.name,
      // location: { LOOK_AT_OBJECT: 'OK' },
      totalGraves: graveyard.totalGraves,
      occupiedGraves: graveyard.occupiedGraves
    })));
};

export const getGraveList = () => {
  // return fetch('URL!!!!')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch grave list';
      return json;
    })
    .then(json => json.map(grave => ({
      id: grave._id,
      occupied: grave.occupied,
      occupant: {
        name: grave.occupant.name
        // WHAT ELSE IS IN HERE??
      },
      graveyard: grave.graveyard
    })));
};
