import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllGraves from '../containers/graves/AllGraves';
import AllGraveyards from '../containers/graveyards/AllGraveyards';
import GraveDetailsById from '../containers/graves/GraveDetailsById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllGraveyards} />
        <Route exact path="/:id" component={AllGraves} />
        <Route exact path="/:graveyard/:id" component={GraveDetailsById} />
      </Switch>
    </Router>
  );
}
