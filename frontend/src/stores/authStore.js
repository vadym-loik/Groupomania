import { defineStore } from 'pinia';
import router from '../router/index';
import Axios from '../api';
// import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth'),
    userId: null,
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

      const token = res.data.token;
      localStorage.setItem('auth', token);
      this.$state.token = token;
      alert('User was created successfully!');
      router.push('/');

      // router.push('/login');
    },

    // LOGIN
    async login(email, password) {
      const res = await Axios.post('api/auth/login', {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('auth', token);
      this.$state.token = token;
      router.push('/');
    },

    // LOGOUT
    logout() {
      // perform logout logic, e.g. clear the user session
      this.$state.token = null;

      // Remove login state from local storage
      localStorage.removeItem('auth');
      router.push('/login');
    },
  },
});
