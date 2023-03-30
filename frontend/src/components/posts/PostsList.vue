<template>
  <Container>
    <div class="posts-list">
      <PostCard />
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue';
import PostCard from './PostCard.vue';

export default {
  name: 'PostsList',
  components: {
    Container,
    PostCard,
  },
};
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
