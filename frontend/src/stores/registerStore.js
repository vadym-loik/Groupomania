// import { defineStore } from 'pinia';
// import Axios from '../api.js';

// export const useRegistrationStore = defineStore('registration', {
//   state: () => ({
//     email: '',
//     password: '',
//     confirm_password: '',
//   }),

//   actions: {
//     async submitForm() {
//       const { email, password, confirm_password } = this.$state;

//       try {
//         // Make API call to register user
//         await Axios.post('/signup', {
//           email,
//           password,
//           confirm_password,
//         });

//         alert('Registration was successful');
//       } catch (error) {
//         alert('Registration failed');
//       }
//     },
//   },
// });
