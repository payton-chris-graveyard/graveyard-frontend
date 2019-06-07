import { combineReducers } from 'redux';
import graveyardList from './graveyardListReducer';
import graveList from './graveListReducer';
import graveDetail from './graveDetailReducer';
import updateGrave from './updateGraveReducer';

export default combineReducers({
  graveyardList,
  graveList,
  graveDetail,
  updateGrave
});
