import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores';
import Axios from '../axios';

const baseUrl = `${import.meta.env.BASE_URL}/users`;

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: {},
    user: {},
  }),
  actions: {
    async signup(user) {
      await Axios.post(`${baseUrl}/signup`, user);
    },

    async update(id, params) {
      await Axios.put(`${baseUrl}/${id}`, params);

      // update stored user if the logged in user updated their own record
      const authStore = useAuthStore();
      if (id === authStore.user.id) {
        // update local storage
        const user = { ...authStore.user, ...params };
        localStorage.setItem('user', JSON.stringify(user));

        // update auth user in pinia state
        authStore.user = user;
      }
    },

    async delete(id) {
      // add isDeleting prop to user being deleted
      this.users.find((x) => x.id === id).isDeleting = true;

      await Axios.delete(`${baseUrl}/${id}`);

      // remove user from list after deleted
      this.users = this.users.filter((x) => x.id !== id);

      // auto logout if the logged in user deleted their own record
      const authStore = useAuthStore();
      if (id === authStore.user.id) {
        authStore.logout();
      }
    },
  },
});
