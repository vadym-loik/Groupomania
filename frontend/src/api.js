import axios from 'axios';

//Axios configurations
const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set the JWT token in the Authorization header for all requests
Axios.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('auth');
    if (!token) {
      return config;
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default Axios;
