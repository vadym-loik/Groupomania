import { defineStore } from 'pinia';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {},
  actions: {
    async getAllComments() {
      try {
        const res = await Axios.get('/api/comments/');
        this.$state.comments = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    //   async getAllCommentsOfPost(postId) {
    //     // console.log(postId);
    //     try {
    //       const res = await Axios.get(`/api/comments/${postId}`);
    //       this.$state.comments = [...this.$state.comments, res.data];
    //     } catch (error) {
    //       console.log(error);
    //     }

    //     // console.log(this.$state.comments);
    //   },

    addComment(comment) {
      this.$state.comments.push(comment);
    },
  },
});
