import { axios } from './axios';
import { BASE_URL, PRODUCT_URL } from './constants';

export const getProducts = async ({ offset, limit }) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${PRODUCT_URL.BASE}/`, {
      params: {
        offset,
        limit,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
