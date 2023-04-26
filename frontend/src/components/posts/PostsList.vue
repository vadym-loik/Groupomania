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
import { ref } from 'vue';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();

const posts = ref([]);

async function getAllPosts() {
  await postStore.fetchPosts();
  posts.value = postStore.posts;
}

getAllPosts();

// onMounted(async () => {
//   await postStore.fetchPosts(posts);
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
