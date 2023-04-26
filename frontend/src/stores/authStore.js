import { defineStore } from 'pinia';
import Axios from '../api';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    loggedIn: false,
    user: null,
    token: null,
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

        const user = response;

        this.user = user;
        this.loggedIn = true;
        this.error = null;

        // if registration successful, login
        // if (response.status === 201) {
        //   this.login();
        // } else {
        //   this.error = error.message;
        //   throw error;
        // }

        // Store login state in local storage
        localStorage.setItem('auth', JSON.stringify({ user: this.user }));

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

        const user = response;
        console.log(user);

        this.user = user;
        this.token = response.token;
        this.loggedIn = true;
        this.error = null;

        // Store login state in local storage
        localStorage.setItem(
          'auth',
          JSON.stringify({
            user: this.user,
            token: this.token,
            loggedIn: this.loggedIn,
          })
        );

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
