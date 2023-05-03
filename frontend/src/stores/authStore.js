import { defineStore } from 'pinia';
import Axios from '../api';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('auth') || null,
    userId: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    // isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    getUserId() {
      const token = localStorage.getItem('auth');
      const [header, payload] = token?.split('.');
      const decodedPayload = JSON.parse(window.atob(payload));
      this.userId = decodedPayload?.userId;
      // getOneUser(decodedPayload?.userId);
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
