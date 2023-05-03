import { defineStore } from 'pinia';
import { usePostStore } from '../stores/postStore';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore();
      return state.comments.filter((post) => post.postId === postSore.post.id);
    },
  },
  actions: {
    async fetchComments(postId) {
      try {
        await Axios.get(`/api/comments/${postId}`).then((res) => {
          this.comments = res.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
