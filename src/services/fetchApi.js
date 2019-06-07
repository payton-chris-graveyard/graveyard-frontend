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
    // .then(json => json.graves)
    .then(json => console.log('getGraveList fetch', json))
    .then(json => json.map(grave => ({
      id: grave._id,
      occupied: grave.graves.occupied,
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

// export const getGrave = id => {
//   // return fetch('URL')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch grave details';
//       return json;
//     })
//     .then(grave => ({
//       id: grave._id,
//       occupied: grave.occupied,
//       occupant: {
//         name: grave.occupant.name,
//         dob: grave.occupant.dob,
//         dod: grave.occupant.dod,
//         causeOfDeath: grave.occupant.causeOfDeath,
//         epitaph: grave.occupant.epitaph
//       },
//       graveyard: grave.graveyard
//     }))
// };
