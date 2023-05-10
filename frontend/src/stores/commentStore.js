import { defineStore } from 'pinia';
import { usePostStore } from '../stores/postStore';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {},
  actions: {
    async getComments(postId) {
      // console.log(postId);
      try {
        const res = await Axios.get(`/api/comments/${postId}`);
        this.$state.comments = [...this.$state.comments, res.data];
      } catch (error) {
        console.log(error);
      }

      // console.log(this.$state.comments);
    },

    addComment(postId, comment) {
      console.log(this.$state.comments);
      const commentList = this.$state.comments.filter(
        (comment) => comment[0]?.postId === postId
      );
      console.log(commentList);
      if (commentList.length > 0) {
        commentList[0].push(comment);
      } else {
        this.$state.comments.push([comment]);
      }
    },
  },
});
