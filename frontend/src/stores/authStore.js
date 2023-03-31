import { defineStore } from 'pinia';
import axios from '../axios';
import { router } from '../router/index';

const baseUrl = `${import.meta.env.BASE_URL}/login`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  getters: {},
  actions: {
    async login(email, password) {
      try {
        const user = await axios.post(`${baseUrl}/authenticate`, {
          email,
          password,
        });
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user.token));
        router.push(this.returnUrl || '/');
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/account/login');
    },
  },
});
