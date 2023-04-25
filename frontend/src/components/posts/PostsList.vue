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
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();

const posts = ref([]);

onMounted(async () => {
  await postStore.fetchPosts();
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
