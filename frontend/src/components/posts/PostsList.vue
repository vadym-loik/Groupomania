<template>
  <Container>
    <div class="posts-list">
      <PostCard v-for="post in postStore.posts" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<script setup>
import Container from '../Container.vue';
import PostCard from './PostCard.vue';
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();
postStore.getAllPosts();
// console.log(postStore.posts);

onMounted(() => {
  postStore.posts;
});
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
