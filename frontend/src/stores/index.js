import { defineStore } from 'pinia';
import axios from '../axios';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    email: null,
    password: null,
  }),
  getters: {},
  actions: {},
});

// export const useStore = defineStore('store', () => {
//   const user = ref({
//     email: '',
//     password: '',
//   });

//   async function createAccount() {
//     await axios
//       .post(`/auth/signup`, user)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return { createAccount };
// });
