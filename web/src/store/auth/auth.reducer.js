import { AUTH_BEGIN, AUTH_SUCCESS, AUTH_FAILURE } from './auth.actions';

const intialstate = {
  loading: false,
  isLoggedIn: false,
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

    default:
      return state;
  }
};
