import { defineStore } from 'pinia';
import Axios from '../api';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: [],
  }),
  actions: {
    async getOneUser(id) {
      this.user = await Axios.get(`/api/auth/profile/${id}`).then(
        (response) => response.data
      );
    },
  },
});
