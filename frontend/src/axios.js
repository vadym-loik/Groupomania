import axios from 'axios';

const Axios = axios.create({
  baseURL: `${import.meta.env.BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set the JWT token in the Authorization header for all requests
Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Axios;
