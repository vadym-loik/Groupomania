import { defineStore } from 'pinia';
import Axios from '../api';
import router from '../router/index';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('auth') || null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    // isAdmin: (state) => state.user?.role === 'admin',
  },
  actions: {
    logout() {
      // perform logout logic, e.g. clear the user session
      this.toke = null;

      // Remove login state from local storage
      localStorage.removeItem('auth');
      router.push('/login');
    },
  },
});
