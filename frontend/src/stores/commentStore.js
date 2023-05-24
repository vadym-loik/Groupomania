import { defineStore } from 'pinia';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {},
  actions: {
    async getAllComments(postId) {
      try {
        const res = await Axios.get(`/api/comments/${postId}`);
        this.comments = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    addComment(comment) {
      this.comments.push(comment);
    },

    deleteComment(id) {
      // console.log(this.comments);
      const idToDelete = id;
      // console.log(idToDelete);

      const index = this.comments.findIndex(
        (comment) => comment.id === idToDelete
      );

      // console.log(index);

      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    },
  },
});
