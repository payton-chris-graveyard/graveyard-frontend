import { getGraveyardList } from '../services/fetchApi';

const FETCH_GRAVEYARDLIST_LOADING = 'FETCH_GRAVEYARDLIST_LOADING';
const FETCH_GRAVEYARDLIST = 'FETCH_GRAVEYARDLIST';

export const fetchGraveyardList = () => ({
  type: FETCH_GRAVEYARDLIST,
  pendingType: FETCH_GRAVEYARDLIST_LOADING,
  payload: getGraveyardList()
});
