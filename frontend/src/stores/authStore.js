import { defineStore } from 'pinia';
import Axios from '../api';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {},
    token: localStorage.getItem('auth') || null,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    async signup(name, email, password) {
      try {
        // perform signup logic, e.g. make an API request to register the user
        const response = await Axios.post('/api/auth/signup', {
          name,
          email,
          password,
        });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem('auth', this.token);
        router.push('/');
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async login(email, password) {
      try {
        // perform login logic, e.g. make an API request to authenticate the user
        const response = await Axios.post('/api/auth/login', {
          email,
          password,
        });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem('auth', this.token);
        router.push('/');
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    logout() {
      // perform logout logic, e.g. clear the user session
      this.user = null;
      this.loggedIn = false;

      // Remove login state from local storage
      localStorage.removeItem('auth');
      router.push('/login');
    },
  },
});
