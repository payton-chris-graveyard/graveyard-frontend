import { getGraveList } from '../services/fetchApi';

export const FETCH_GRAVELIST_LOADING = 'FETCH_GRAVELIST_LOADING';
export const FETCH_GRAVELIST = 'FETCH_GRAVELIST';

export const fetchGraveList = (id) => ({
  type: FETCH_GRAVELIST,
  pendingType: FETCH_GRAVELIST_LOADING,
  payload: getGraveList(id)
});
