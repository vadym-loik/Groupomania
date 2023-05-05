import { defineStore } from 'pinia';
import router from '../router/index';
import Axios from '../api';
import { useStorage } from '@vueuse/core';

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
      if (!this.token) return '';
      const token = localStorage.getItem('auth');
      const [header, payload] = token?.split('.');
      const decodedPayload = JSON.parse(window.atob(payload));
      console.log(decodedPayload);
      this.userId = decodedPayload?.userId;
    },

    // REGISTRATION
    async signup(state, name, email, password) {
      const res = await Axios.post('api/auth/signup', {
        name,
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('auth', token);
      alert('User was created successfully!');
      router.push('/login');
    },

    // LOGIN
    async login(email, password) {
      console.log(email);
      const res = await Axios.post('api/auth/login', {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('auth', token);
      this.token = token;
      router.push('/');
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
