<template>
  <main class="home">
    <div class="home-wrapper">
      <Container>
        <SectionSpacer />
        <PostForm />
        <MainTitle class="home-title">All posts</MainTitle>
        <PostsList />
      </Container>
    </div>
  </main>
</template>

<script setup>
import SectionSpacer from '../components/SectionWithHeaderSpacer.vue';
import PostForm from '../components/posts/PostForm.vue';
import Container from '../components/Container.vue';
import MainTitle from '../components/MainTitle.vue';
import PostsList from '../components/posts/PostsList.vue';
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  background-size: cover;
  background-position: center;
  background-color: #e6e1e1;
  min-height: calc(100vh - 30px);
  z-index: 1;

  &-title {
    text-align: center;
    font-size: medium;
  }

  @media (min-width: 768px) {
    &-title {
      font-size: 26px;
    }
  }
}
</style>
