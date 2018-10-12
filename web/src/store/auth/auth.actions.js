import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const AUTH_BEGIN = 'AUTH_BEGIN';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authBegin = () => ({
  type: AUTH_BEGIN,
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authError = error => ({
  type: AUTH_FAILURE,
  payload: { error },
});

export const signup = info => async (dispatch) => {
  dispatch(authBegin());
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/signup`, info);

    localStorage.setItem('token', `Bearer ${data.token}`);
    dispatch(authSuccess());
    return true;
  } catch (error) {
    return dispatch(authError(error.response.data));
  }
};
