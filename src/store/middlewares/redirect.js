import browserHistory from "../../browser-history";
import {ActionsTypes} from "../actions";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionsTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
