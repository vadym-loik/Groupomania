import { defineStore } from 'pinia';
import Axios from '../api';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      // this.posts = [];
      // this.loading = true;
      try {
        this.posts = await Axios.get(`/api/posts/`).then(
          (response) => response.data
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPostById(id) {
      // this.post = null;
      // this.loading = true;
      try {
        this.post = await Axios.get(`/api/posts/${id}`).then(
          (response) => response.data
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async createPost(post) {
      try {
        const response = await Axios.post(`/api/posts`, post);
        this.posts.push(response.data);
      } catch (error) {
        this.error = error;
      }
    },
    async updatePost(post) {
      // this.posts = [];
      try {
        const response = await Axios.put(`/api/posts/${post.id}`, post);
        this.posts = this.posts.map((p) =>
          p.id === response.data.id ? response.data : p
        );
      } catch (error) {
        this.error = error;
      }
    },
    async deletePost(postId) {
      // this.posts = [];
      try {
        await Axios.delete(`/api/posts/${postId}`);
        this.posts = this.posts.filter((p) => p.id !== postId);
      } catch (error) {
        this.error = error;
      }
    },
  },
});
