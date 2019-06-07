import { combineReducers } from 'redux';
import graveyardList from './graveyardListReducer';
import graveList from './graveListReducer';
// import graveDetail from './graveDetailReducer';

export default combineReducers({
  graveyardList,
  graveList,
  // graveDetail
});
