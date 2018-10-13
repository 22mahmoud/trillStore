import { push } from 'connected-react-router';

import api from '../../api';
import { catchException } from '../../utils/catchException';
import {
  FETCH_ME_REQUEST, FETCH_ME_SUCCESS, FETCH_ME_FAILURE, AUTH_FAILURE,
} from '../acionTypes';

const { userService } = api;

export const fetchMeRequest = () => ({
  type: FETCH_ME_REQUEST,
});

export const fetchMeSuccess = data => ({
  type: FETCH_ME_SUCCESS,
  payload: { data },
});

export const fetchMeFailure = error => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_FAILURE, payload: { error } });
  dispatch(push('/'));
  dispatch({
    type: FETCH_ME_FAILURE,
    payload: { error },
  });
};

export const me = () => catchException(fetchMeFailure, async (dispatch) => {
  dispatch(fetchMeRequest());
  const { data } = await userService.me();
  dispatch(fetchMeSuccess(data));
  return true;
});
