<template>
  <Container>
    <div class="posts-list">
      <PostForm />
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue';
import PostForm from './PostForm.vue';

export default {
  name: 'PostsList',
  components: {
    Container,
    PostForm,
  },
};
</script>

<style lang="scss" scoped></style>
