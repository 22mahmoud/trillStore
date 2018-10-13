import { axios } from './axios';
import { AUTH_URL } from './constants';

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(AUTH_URL.LOGIN, { email, password });
    return data.token;
  } catch (error) {
    throw error;
  }
};

export const signup = async (info) => {
  try {
    const { data } = await axios.post(AUTH_URL.SIGNUP, info);
    return data.token;
  } catch (error) {
    throw error;
  }
};

export const me = async () => {
  try {
    const data = await axios.get(`${AUTH_URL.ME}?fields=role,email,firstName,lastName`);
    return data;
  } catch (error) {
    throw error;
  }
};
