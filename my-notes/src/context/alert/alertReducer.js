import { SHOW_ALERT } from "../types";
import { HIDE_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: ( state, {payload} ) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: state => ({ ...state, visible: false }),
  DEFAULT: state => state
}

//проверяет экшентайп и возвращает измененный стэйт
export const AlertReducer = (state, action) => {

  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);

}