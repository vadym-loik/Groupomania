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
// import userService from '@/services/user.service.js';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

onMounted(async () => {
  await axios
    .get('http://localhost:3000/posts')
    .then((res) => {
      posts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

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
