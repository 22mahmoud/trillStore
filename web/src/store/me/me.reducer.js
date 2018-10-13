import { FETCH_ME_REQUEST, FETCH_ME_SUCCESS, FETCH_ME_FAILURE } from '../acionTypes';

const intialState = {
  loading: false,
  data: null,
  error: null,
};

export const meReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case FETCH_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
