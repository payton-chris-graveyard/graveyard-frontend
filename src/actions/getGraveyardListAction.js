import { getGraveyardList } from '../services/fetchApi';

export const FETCH_GRAVEYARDLIST = 'FETCH_GRAVEYARDLIST';
export const FETCH_GRAVEYARDLIST_LOADING = 'FETCH_GRAVEYARDLIST_LOADING';

export const fetchGraveyardList = () => ({
  type: FETCH_GRAVEYARDLIST,
  pendingType: FETCH_GRAVEYARDLIST_LOADING,
  payload: getGraveyardList()
});
