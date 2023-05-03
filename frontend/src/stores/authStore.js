import { defineStore } from 'pinia';
import router from '../router/index';
import Axios from '../api';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: localStorage.getItem('auth') || null,
      userId: null,
      user: null,
    };
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    getUserId: (state) => {
      const token = localStorage.getItem('auth');
      const [header, payload] = token?.split('.');
      const decodedPayload = JSON.parse(window.atob(payload));
      state.userId = decodedPayload?.userId;
    },
    // isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    async signup(name, email, password) {
      const res = await Axios.post('api/auth/signup', {
        name,
        email,
        password,
      });

      const user = await res.data;
      this.user = user;
      const token = res.data.token;
      localStorage.setItem('auth', token);
      alert('User was created successfully!');
      router.push('/login');
    },

    async login(email, password) {
      const res = await Axios.post('api/auth/login', {
        email,
        password,
      });

      const user = res.data;
      this.user = user;
      const token = res.data.token;
      localStorage.setItem('auth', token);
      router.push('/');
    },

    logout() {
      // perform logout logic, e.g. clear the user session
      this.toke = null;

      // Remove login state from local storage
      localStorage.removeItem('auth');
      router.push('/login');
    },
  },
});
