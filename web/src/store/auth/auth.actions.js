import api from '../../api';
import {
  AUTH_BEGIN, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT,
} from '../acionTypes';
import { catchException } from '../../utils/catchException';

const { userService } = api;

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

export const signup = info => catchException(authError, async (dispatch) => {
  dispatch(authBegin());
  const token = await userService.signup(info);
  localStorage.setItem('token', `Bearer ${token}`);
  dispatch(authSuccess());
  return true;
});

export const login = info => catchException(authError, async (dispatch) => {
  dispatch(authBegin());
  const { email, password } = info;
  const token = await userService.login(email, password);
  localStorage.setItem('token', `Bearer ${token}`);
  dispatch(authSuccess());
  return true;
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_LOGOUT });
};
