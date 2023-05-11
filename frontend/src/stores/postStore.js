import { defineStore } from 'pinia';
import Axios from '../api';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async getAllPosts() {
      this.loading = true;
      try {
        const res = await Axios.get(`/api/posts/`);
        this.posts = res.data;
        this.posts.reverse();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    // addNewPost(post) {
    //   this.posts.push(post);
    // },

    // deletePost(post) {
    //   this.posts.splice(post, 1);
    // },
  },
});
