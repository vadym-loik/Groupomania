<template>
  <Container>
    <div class="posts-list" ref="posts">
      <PostCard v-for="post in posts" :key="post.id" ref="posts" />
    </div>
  </Container>
</template>

<script setup>
import axios from 'axios';
import Container from '../Container.vue';
import PostCard from './PostCard.vue';
import { onMounted, ref } from 'vue';

const posts = ref();

onMounted(() => {
  const getAllPost = async () => {
    await axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        console.log(response);
        posts.value = response.data;
      })
      .catch((err) => console.log(err));
  };
  return getAllPost();
});

// export default {
//   name: 'PostsList',
//   components: {
//     Container,
//     PostCard,
//   },
//   props: {
//     posts: {
//       type: Array,
//       required: true,
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
