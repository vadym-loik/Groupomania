import { defineStore } from 'pinia';
import Axios from '../api';

export const useRegistrationStore = defineStore({
  id: 'registration',
  state: () => ({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  }),

  actions: {
    async submitForm() {
      const { name, email, password, confirm_password } = this.$state;

      try {
        // Make API call to register user
        await Axios.post('/api/auth/signup', {
          name,
          email,
          password,
          confirm_password,
        });

        alert('Registration was successful');
      } catch (error) {
        alert('Registration failed');
      }
    },
  },
});
