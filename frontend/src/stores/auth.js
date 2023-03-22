import { defineStore } from 'pinia';
// import { getUsers } from '../services/getUser';
// import { signupUser } from '../services/signupUser';

export const useSignupUser = defineStore({
  id: 'signupUser',
  state: () => {
    return {
      name: null,
      email: null,
    };
  },
  actions: {
    handleUser() {
      this.name = '';
      this.email = '';
      console.log(response);
    },
  },
});

// export const useUserAuth = defineStore({
//   id: 'userAuth',
//   state: () => {
//     return {
//       name: null,
//       email: null,
//     };
//   },
//   actions: {
//     handleUser() {
//       this.name = 'vad';
//       this.email = 'vad@vad.fr';
//       console.log(response);
//     },
//   },
// });
