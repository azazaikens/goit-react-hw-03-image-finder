import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '39435847-d6a38cbbc0d0e6f45fb6a9696';

const instance = axios.create({ baseURL: BASE_URL });

export const axiosAPI = async (query = 'cat', page = 1) => {
  const { data } = await instance.get(`/`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });

  return data;
};
