import { defineStore } from 'pinia';
import Axios from '../api';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {
      // id: 13,
      // name: 'Lili',
      // email: 'lili@fr.fr',
      // imageUrl: null,
      // password: '$2b$10$vzZ81vNZMXMo.8O2HKPgxucJSR3vAw2oiTWLIBFPZ50eSjCtPIQ06',
      // isAdmin: false,
      // createdAt: '2023-04-25T13:34:49.000Z',
      // updatedAt: '2023-04-25T13:34:49.000Z',
    },
  }),
  actions: {
    setUser(userById) {
      this.user = userById;
      console.log(this.user);
    },
    modifyUserName(newName) {
      this.user.name = newName;
    },
  },
});
