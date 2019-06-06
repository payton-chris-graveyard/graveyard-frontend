import { getGrave } from '../services/fetchApi';

export const FETCH_GRAVE = 'FETCH_GRAVE';
export const FETCH_GRAVE_LOADING = 'FETCH_GRAVE_LOADING';

export const fetchGrave = id => ({
  type: FETCH_GRAVE,
  pendingType: FETCH_GRAVE_LOADING,
  payload: getGrave(id)
});
