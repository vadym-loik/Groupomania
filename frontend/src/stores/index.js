import { defineStore } from 'pinia';
import { createRouter } from 'vue-router';
import axios from 'axios';

const router = createRouter();

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    userId: localStorage.getItem('user'),
    connectedUser: null,
    posts: null,
    errorMsg: null,
    likes: null,
  }),
  getters: {
    showConnectedUser: (state) => state.connectedUser,
    showPosts: (state) => state.posts,
  },
  actions: {
    setUserId(userId) {
      this.userId = userId;
    },
    async getOneUser() {
      try {
        const res = await axios.post('user', { id: this.userId });
        this.connectedUser = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    disconnectUser() {
      this.userId = null;
      this.connectedUser = null;
      localStorage.clear();
      if (router.options.base !== '/') {
        router.push('/');
      }
    },
    async getPosts() {
      try {
        const res = await axios.get('/posts/' + this.userId);
        this.posts = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
