import { defineStore } from 'pinia';
import { usePostStore } from './postStore';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore();
      return state.comments.filter((post) => post.postId === postSore.postId);
    },
  },
  actions: {
    async fetchComments() {
      this.comments = await Axios.get(`/api/comments/${postId}`).then(
        (response) => response.json()
      );
    },
  },
});
