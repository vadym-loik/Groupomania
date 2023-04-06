// import { defineStore } from 'pinia';
// import Axios from '../api.js';
// import router from '../router';

// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     user: null,
//     token: localStorage.getItem('token') || '',
//   }),
//   getters: {
//     isAuthenticated: (state) => !!state.token,
//   },
//   actions: {
//     async login({ email, password }) {
//       try {
//         const response = await Axios.post('api/login', { email, password });
//         const { user, token } = response.data;
//         this.user = user;
//         this.token = token;
//         localStorage.setItem('token', token);
//         router.push('/');
//         console.log(user);
//         return user;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     async logout() {
//       this.user = null;
//       this.token = '';
//       localStorage.removeItem('token');
//       router.push('/account/login');
//     },
//   },
// });
