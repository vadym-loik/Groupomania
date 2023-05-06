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
        await Axios.get(`/api/posts/`).then((res) => {
          this.$state.posts = res.data;
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async addNewPost(newPost) {
      try {
        await Axios.post('/api/posts/', newPost).then((res) =>
          console.log(res)
        );
      } catch (error) {
        console.log(error);
      }

      this.posts.push(newPost);
    },
  },
});
