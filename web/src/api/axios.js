import Axios from 'axios';

import { BASE_URL } from './constants';

const token = localStorage.getItem('token') || null;

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: token,
  },
});
