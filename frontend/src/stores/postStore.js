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
      this.$state.loading = true;
      try {
        await Axios.get(`/api/posts/`).then((res) => {
          this.$state.posts = res.data;
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.$state.loading = false;
      }

      this.$state.posts.reverse();
    },

    async addNewPost(newPost) {
      try {
        await Axios.post('/api/posts/', newPost).then((res) =>
          console.log(res)
        );
      } catch (error) {
        console.log(error);
      }

      this.getAllPosts();
    },
  },
});
