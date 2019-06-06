export const UPDATE_GRAVE = 'UPDATE_GRAVE';
export const updateGrave = (id, body) => ({
  type: UPDATE_GRAVE,
  payload: { id, body }
});
