import { UPDATE_GRAVE } from '../actions/updateGraveAction';
import { FETCH_GRAVE } from '../actions/getGraveDetailAction';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case UPDATE_GRAVE:
      return { ...state, [state.graveId]: action.payload };
    case FETCH_GRAVE:
      return { ...state, graveId: action.payload.id };
    default:
      return state;
  }
}
