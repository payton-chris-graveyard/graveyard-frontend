export const UPDATE_GRAVE = 'UPDATE_GRAVE';
export const updateGrave = (name, dob, dod, causeOfDeath, epitaph) => ({
  type: UPDATE_GRAVE,
  payload: { name, dob, dod, causeOfDeath, epitaph }
});
