import { defineStore } from 'pinia';
import { usePostStore } from '../stores/postStore';
import Axios from '../api';

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
  }),
  getters: {},
  actions: {},
});
