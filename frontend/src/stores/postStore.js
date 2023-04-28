import { defineStore } from 'pinia';
import Axios from '../api';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
  }),
  getters: {},
  actions: {
    setPosts(postList) {
      this.posts = postList;
    },
    getOnePost(onePost) {
      this.post = onePost;
    },
    addNewPost(newPost) {
      this.posts.push(newPost);
    },
    // async function fetchPostById(id) {
    //   try {
    //     this.post = await Axios.get(`/api/posts/${id}`).then(
    //       (response) => response.data
    //     );
    //   } catch (error) {
    //     this.error = error;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    //   async updatePost(post) {
    //     try {
    //       const response = await Axios.put(`/api/posts/${post.id}`, post);
    //       this.posts = this.posts.map((p) =>
    //         p.id === response.data.id ? response.data : p
    //       );
    //     } catch (error) {
    //       this.error = error;
    //     }
    //   },
    //   async deletePost(postId) {
    //     try {
    //       await Axios.delete(`/api/posts/${postId}`);
    //       this.posts = this.posts.filter((p) => p.id !== postId);
    //     } catch (error) {
    //       this.error = error;
    //     }
    //   },
  },
});
