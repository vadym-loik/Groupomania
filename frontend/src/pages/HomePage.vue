<template>
  <main class="home">
    <Container>
      <SectionSpacer />
    </Container>
  </main>
</template>

<script>
import SectionSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';

export default {
  name: 'HomePage',
  components: {
    Container,
    SectionSpacer,
  },
};
</script>

<style lang="scss" scoped></style>
