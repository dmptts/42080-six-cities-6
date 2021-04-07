import {ActionsTypes} from '../actions';

const initialState = {
  init: false,
  authStatus: false,
  user: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.CHECK_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case ActionsTypes.GET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case ActionsTypes.CHANGE_INIT_STATUS:
      return {
        ...state,
        init: action.payload
      };
  }

  return state;
};

export {user};
