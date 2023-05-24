import { defineStore } from 'pinia';
import router from '../router/index';
import Axios from '../api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth'),
    userId: null,
    emailError: '',
    passwordError: '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    // GET userId
    getUserId() {
      if (!this.$state.token) return '';
      const token = localStorage.getItem('auth');
      const [header, payload] = token?.split('.');
      const decodedPayload = JSON.parse(window.atob(payload));
      this.$state.userId = decodedPayload?.userId;
    },

    // REGISTRATION
    async signup(name, email, password) {
      const res = await Axios.post('api/auth/signup', {
        name,
        email,
        password,
      });

      // const token = res.data.token;
      // localStorage.setItem('auth', token);
      // this.token = token;
      alert('User was created successfully!');
      // router.push('/');

      router.push('/login');
    },

    // LOGIN
    async login(email, password) {
      let isAuthorized = true;

      const res = await Axios.post('api/auth/login', {
        email,
        password,
      }).catch((error) => {
        isAuthorized = false;
        if (error.response.status === 401) {
          const errors = error.response.data.errors;

          if (errors.email) {
            this.$state.emailError = errors.email[0];
          }
          if (errors.password) {
            this.$state.passwordError = errors.password[0];
          }
          return;
        }
      });

      if (isAuthorized) {
        const token = res.data.token;
        localStorage.setItem('auth', token);
        this.token = token;

        router.push('/');
      }
    },

    // LOGOUT
    logout() {
      // perform logout logic, e.g. clear the user session
      this.token = null;

      // Remove login state from local storage
      localStorage.removeItem('auth');
      router.push('/login');
    },
  },
});
