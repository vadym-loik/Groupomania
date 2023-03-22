import axios from 'axios';

export const getUsers = () => {
  return axios
    .get('/', {
      baseURL: 'http://localhost:8000',
    })
    .then((response) => response.data);
};
