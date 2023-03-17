import { defineStore } from 'pinia';
import { getUsers } from '../services/auth';

export const useUserAuth = defineStore('userAuth', {
  state: () => {
    return {
      name: null,
      email: null,
      photo: null,
    };
  },
  actions: {
    handleUsers() {
      //   this.name = user.name;
      //   this.email = user.email;
      //   this.photo = user.photo;
      return getUsers().then((response) => {
        this.name = 'vad';
        this.email = 'vad@vad.fr';
        this.photo = 'vad.jpg';
        console.log(response);
      });
    },
  },
});
