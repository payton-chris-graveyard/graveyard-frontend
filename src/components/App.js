import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './display/Header';
import AllGraveyards from '../containers/graveyards/AllGraveyards';
import AllGraves from '../containers/graves/AllGraves';
import GraveDetailsById from '../containers/graves/GraveDetailsById';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllGraveyards} />
        <Route exact path="/:id" component={AllGraves} />
        <Route exact path="/graves/:id" component={GraveDetailsById} />
      </Switch>
    </Router>
  );
}
