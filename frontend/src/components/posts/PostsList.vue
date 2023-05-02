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
import { ref, onMounted } from 'vue';

import Axios from '@/api';

const posts = ref([]);

async function getAllPosts() {
  try {
    await Axios.get(`/api/posts/`).then((res) => {
      posts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
}

onMounted(getAllPosts);
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
