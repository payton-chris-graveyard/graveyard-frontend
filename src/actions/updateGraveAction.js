export const UPDATE_GRAVE = 'UPDATE_GRAVE';
export const updateGrave = (id, name, dob, dod, causeOfDeath, epitaph) => ({
  type: UPDATE_GRAVE,
  payload: { id, name, dob, dod, causeOfDeath, epitaph }
});
