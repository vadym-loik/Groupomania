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
import { usePostStore } from '@/stores/postStore';
import Axios from '@/api';

const postStore = usePostStore();

const posts = ref([]);
const post = ref(null);
const loading = ref(false);

async function getAllPosts() {
  try {
    await Axios.get(`/api/posts/`).then((response) => {
      postStore.setPosts(response.data);
      posts.value = postStore.posts;
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = postStore.loading;
  }
}

// async function getOnePost(id) {
//   try {
//     await Axios.get(`/api/posts/${id}`).then((response) => {
//       postStore.getOnePost(response.data);
//       post.value = postStore.post;
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading.value = postStore.loading;
//   }
// }

onMounted(getAllPosts);
// onMounted(getOnePost);
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
