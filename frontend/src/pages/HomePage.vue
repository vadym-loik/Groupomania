<template>
  <main class="home">
    <div class="home__wrapper">
      <Container>
        <SectionSpacer />
        <PostForm />
        <MainTitle class="home__title">All posts</MainTitle>
        <PostsList />
      </Container>
    </div>
  </main>
</template>

<script>
import SectionSpacer from '../components/SectionWithHeaderSpacer.vue';
import PostForm from '../components/posts/PostForm.vue';
import Container from '../components/Container.vue';
import MainTitle from '../components/MainTitle.vue';
import PostsList from '../components/posts/PostsList.vue';

export default {
  name: 'HomePage',
  components: {
    SectionSpacer,
    PostForm,
    Container,
    MainTitle,
    PostsList,
  },
};
</script>

<style lang="scss" scoped>
.home__title {
  text-align: center;
  font-size: 26px;
}
.home__wrapper {
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 29, 45, 0.5);
    z-index: -1;
  }
}
</style>
