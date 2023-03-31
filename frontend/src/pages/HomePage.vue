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
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-color: #e6e1e1;
  min-height: calc(100vh - 30px);
  z-index: 1;

  &-title {
    text-align: center;
    font-size: 26px;
  }
}
</style>
