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

export const getGraveList = graveyard => {
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
        name: grave.occupant.name,
        dob: grave.occupant.dob,
        dod: grave.occupant.dod,
        causeOfDeath: grave.occupant.causeOfDeath,
        epitaph: grave.occupant.epitaph
      },
      graveyard: grave.graveyard
    })));
};

export const getGrave = id => {
  // return fetch('URL')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch grave details';
      return json;
    })
    .then(grave => ({
      id: grave._id,
      occupied: grave.occupied,
      occupant: {
        name: grave.occupant.name,
        dob: grave.occupant.dob,
        dod: grave.occupant.dod,
        causeOfDeath: grave.occupant.causeOfDeath,
        epitaph: grave.occupant.epitaph
      },
      graveyard: grave.graveyard
    }))
};
