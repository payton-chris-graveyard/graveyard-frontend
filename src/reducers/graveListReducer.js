import {
  FETCH_GRAVELIST,
  FETCH_GRAVELIST_LOADING
} from '../actions/getGraveListAction';

const initialState = {
  loading: false,
  graveList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GRAVELIST:
      return { ...state, loading: false, graveList: action.payload };
    case FETCH_GRAVELIST_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
