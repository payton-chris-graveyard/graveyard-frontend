export const getGraveyardList = () => {
  return fetch('http://ec2-34-216-8-225.us-west-2.compute.amazonaws.com:54321/api/v1/graveyards')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch graveyard list';
      return json;
    })
    .then(json => json.map(graveyard => ({
      id: graveyard._id,
      name: graveyard.name,
      location: { 
        lat: graveyard.location.lat,
        lng: graveyard.location.lng,
        city: graveyard.location.city,
        state: graveyard.location.state
      },
      totalGraves: graveyard.totalGraves
    })));
};

export const getGraveList = id => {
  return fetch(`http://ec2-34-216-8-225.us-west-2.compute.amazonaws.com:54321/api/v1/graveyards/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch grave list';
      return json;
    })
    .then(json => {
      return Promise.all([json.name, json.graves]);
    })
    .then(array => array[1].map(grave => {
      const graveObj = {
        graveyard: array[0],
        id: grave._id,
        occupied: grave.occupied
      };

      if(grave.occupant) {
        graveObj.occupant = {
          name: grave.occupant.name,
          dob: grave.occupant.dob,
          dod: grave.occupant.dod,
          causeOfDeath: grave.occupant.causeOfDeath,
          epitaph: grave.occupant.epitaph
        };
      }

      return graveObj;
    }));
};

export const getGrave = id => {
  return fetch(`http://ec2-34-216-8-225.us-west-2.compute.amazonaws.com:54321/api/v1/graves/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch grave details';
      return json;
    })
    .then(grave => ({
      id: grave._id,
      occupied: grave.occupied,
      name: grave.occupant ? grave.occupant.name : '',
      dob: grave.occupant ? grave.occupant.dob : '',
      dod: grave.occupant ? grave.occupant.dod : '',
      causeOfDeath: grave.occupant ? grave.occupant.causeOfDeath : '',
      epitaph: grave.occupant ? grave.occupant.epitaph : '',
      graveyard: grave.graveyard
    }));
};

// export const getGrave = graveDetails => {
//   return fetch(`http://ec2-34-216-8-225.us-west-2.compute.amazonaws.com:54321/api/v1/graves/${id}`)
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch grave details';
//       return json;
//     })
//     .then(grave => ({
//       id: grave._id,
//       occupied: grave.occupied,
//       name: grave.occupant ? grave.occupant.name : '',
//       dob: grave.occupant ? grave.occupant.dob : '',
//       dod: grave.occupant ? grave.occupant.dod : '',
//       causeOfDeath: grave.occupant ? grave.occupant.causeOfDeath : '',
//       epitaph: grave.occupant ? grave.occupant.epitaph : '',
//       graveyard: grave.graveyard
//     }));
// };
