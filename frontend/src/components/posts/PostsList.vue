<template>
  <Container>
    <div class="posts-list">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<script setup>
import Container from '../Container.vue';
import PostCard from './PostCard.vue';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();

const getAllPosts = () => {
  postStore.getAllPosts();
};

const getPostById = (postId) => {
  postStore.getPostById(postId);
};

// onMounted(async () => {
//   await Axios.get('http://localhost:8000/api/auth/posts')
//     .then((res) => {
//       posts.value = res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// onMounted(async () => {
//   await userService.getAllPosts();
// });
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
