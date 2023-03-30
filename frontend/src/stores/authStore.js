// import { defineStore } from 'pinia';
// import axios from '../axios';
// import { router } from '../router/index';
// import { useAlertStore } from './alertStore';

// const baseUrl = `${import.meta.env.BASE_URL}/users`;

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
//         localStorage.setItem('user', JSON.stringify(user));
//         router.push(this.returnUrl || '/');
//       } catch (error) {
//         const alertStore = useAlertStore();
//         alertStore.error(error);
//       }
//     },
//     logout() {
//       this.user = null;
//       localStorage.removeItem('user');
//       router.push('/account/login');
//     },
//   },
// });
