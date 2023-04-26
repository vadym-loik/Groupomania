import { defineStore } from 'pinia';
import { usePostStore } from './postStore';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
    text: '',
    userId: null,
    postId: null,
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore();
      return state.comments.filter((post) => post.postId === postSore.post.id);
    },
  },
  actions: {
    async fetchComments(postId) {
      this.comments = await Axios.get(`/api/comments/${postId}`).then(
        (response) => response.data
      );
    },

    async addComment(text, userId, postId) {
      try {
        await Axios.post('/api/comments/', { text, userId, postId });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
