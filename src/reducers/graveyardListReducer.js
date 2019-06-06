import {
  FETCH_GRAVEYARDLIST,
  FETCH_GRAVEYARDLIST_LOADING
} from '../actions/getGraveyardListAction';

const initialState = {
  loading: false,
  graveyardList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GRAVEYARDLIST:
      return { ...state, loading: false, graveyardList: action.payload };
    case FETCH_GRAVEYARDLIST_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
