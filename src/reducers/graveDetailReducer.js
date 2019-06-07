import {
  FETCH_GRAVE,
  FETCH_GRAVE_LOADING
} from '../actions/getGraveDetailAction';
import { UPDATE_GRAVE } from '../actions/updateGraveAction';

const initialState = {
  loading: false,
  graveDetail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GRAVE:
      return { ...state, loading: false, graveDetail: action.payload };
    case FETCH_GRAVE_LOADING:
      return { ...state, loading: true };
    case UPDATE_GRAVE:
      return { ...state, graveDetail: { ...state.graveDetail, ...action.payload, occupied: true } };
    default:
      return state;
  }
}
