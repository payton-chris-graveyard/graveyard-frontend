import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllGraves from '../containers/graves/AllGraves';
import AllGraveyards from '../containers/graveyards/AllGraveyards';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllGraveyards} />
        <Route exact path="/graveyard/:id" component={AllGraves} />
      </Switch>
    </Router>
  );
}

// export default function App() {
//   const graveDetails = {
//     occupied: true,
//     name: 'steve',
//     dob: '4/20',
//     dod: '3/11',
//     causeOfDeath: 'poo',
//     epitaph: 'he stinky',
//     graveyard: 'motel 666'
//   };

//   return (
//     <GraveDetails graveDetails={graveDetails} />
//   );
// }
