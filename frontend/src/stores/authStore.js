import { defineStore } from 'pinia';
import Axios from '../api';
import router from '../router/index';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    user: null,
    error: null,
  }),

  actions: {
    async signup(name, email, password) {
      try {
        // perform signup logic, e.g. make an API request to register the user
        const response = await Axios.post('/api/auth/signup', {
          name,
          email,
          password,
        });
        const data = response;
        console.log(data);
        this.user = data.user;
        this.loggedIn = true;

        this.error = null;
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
          data: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        this.user = data.user;
        this.loggedIn = true;
        this.error = null;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    logout() {
      // perform logout logic, e.g. clear the user session
      this.user = null;
      this.loggedIn = false;
    },
  },
});
