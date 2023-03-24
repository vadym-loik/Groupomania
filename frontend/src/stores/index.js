import { defineStore } from 'pinia';
import { createRouter } from 'vue-router';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    userId: localStorage.getItem('user'),
    connectedUser: null,
    posts: null,
    likes: null,
  }),
});
