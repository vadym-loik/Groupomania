import { defineStore } from 'pinia';
import Axios from '../api';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
  }),
  actions: {
    async getOneUser(id) {
      this.user = await Axios.get(`/api/auth/profile/${id}`).then(
        (response) => response.data
      );
      console.log(this.user);
    },
  },
});
