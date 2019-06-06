import {
  FETCH_GRAVE,
  FETCH_GRAVE_LOADING
} from '../actions/getGraveDetailAction';

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
    default:
      return state;
  }
}
