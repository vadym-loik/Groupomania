import { defineStore } from 'pinia';
import Axios from '../axios';
import router from '../router';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: localStorage.getItem('token'),
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await Axios.post('/login', {
          email,
          password,
        });
        const { user, token } = response.data;
        this.user = user;
        this.token = token;
        localStorage.setItem('token', token);
        router.push(this.returnUrl || '/');
        console.log(user);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      router.push('/account/login');
    },
  },
});

// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     user: JSON.parse(localStorage.getItem('user')),
//     returnUrl: null,
//   }),
//   getters: {},
//   actions: {
//     async login(email, password) {
//       try {
//         const user = await axios.post(`${baseUrl}/authenticate`, {
//           email,
//           password,
//         });
//         this.user = user;
//         localStorage.setItem('user', JSON.stringify(user.token));
//         router.push(this.returnUrl || '/');
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     logout() {
//       this.user = null;
//       localStorage.removeItem('user');
//       router.push('/account/login');
//     },
//   },
// });
