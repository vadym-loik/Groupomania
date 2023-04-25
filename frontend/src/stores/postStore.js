import { defineStore } from 'pinia';
import Axios from '../api';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    selectedPost: null,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchPosts() {
      try {
        const response = await Axios.get(`/api/posts/`);
        this.posts = response.data;
      } catch (error) {
        this.error = error;
      }
    },
    async fetchPostById(postId) {
      try {
        const response = await Axios.get(`/api/posts/${postId}`);
        this.selectedPost = response.data;
      } catch (error) {
        this.error = error;
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
      try {
        await Axios.delete(`/api/posts/${postId}`);
        this.posts = this.posts.filter((p) => p.id !== postId);
      } catch (error) {
        this.error = error;
      }
    },
  },
});
