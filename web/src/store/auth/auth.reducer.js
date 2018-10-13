import {
  AUTH_BEGIN, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT,
} from '../acionTypes';

const intialstate = {
  loading: false,
  isLoggedIn: null,
  error: null,
};

export const authReducer = (state = intialstate, action) => {
  switch (action.type) {
    case AUTH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };

    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isLoggedIn: false,
      };

    case AUTH_LOGOUT:
      return intialstate;

    default:
      return state;
  }
};
