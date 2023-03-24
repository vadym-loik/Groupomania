<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <Logo />
        <Nav />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from './Container.vue';
import Logo from './Logo.vue';
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Container,
    Logo,
    Nav,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background: $secondary-color;
  padding: 16px 0;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
