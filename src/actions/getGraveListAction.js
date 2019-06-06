import { getGraveList } from '../services/fetchApi';

const FETCH_GRAVELIST_LOADING = 'FETCH_GRAVELIST_LOADING';
const FETCH_GRAVELIST = 'FETCH_GRAVELIST';

export const fetchGraveList = graveyard => ({
  type: FETCH_GRAVELIST,
  pendingType: FETCH_GRAVELIST_LOADING,
  payload: getGraveList(graveyard)
});
