import { SHOW_NOTE, LOAD_NOTE, FEATCH_NOTE, REMOVE_NOTE } from "../types";

const handlers = {
  [SHOW_NOTE]: state => ({ ...state, loading: true }),
  [LOAD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FEATCH_NOTE]: (state, {payload}) => ({...state, notes: payload, loading: false }),
  [REMOVE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter( note => note.id !== payload )
  }),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}