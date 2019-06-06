import { combineReducers } from 'redux';
import graveyardList from './graveyardListReducer';
import graveList from './graveListReducer';

export default combineReducers({
  graveyardList,
  graveList
});
