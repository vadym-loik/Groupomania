<template>
  <main class="home">
    <Container>
      <SectionSpacer />
      <PostForm />
      <MainTitle>All posts</MainTitle>
    </Container>
  </main>
</template>

<script>
import SectionSpacer from '../components/SectionWithHeaderSpacer.vue';
import PostForm from '../components/PostForm.vue';
import Container from '../components/Container.vue';
import MainTitle from '../components/MainTitle.vue';

export default {
  name: 'HomePage',
  components: {
    SectionSpacer,
    PostForm,
    Container,
    MainTitle,
  },
};
</script>

<style lang="scss" scoped></style>
