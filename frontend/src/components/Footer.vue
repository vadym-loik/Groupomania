<template>
  <footer class="footer">
    <p class="footer__text">&copy; 2023 connect-e.com</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer {
  display: flex;
  flex-direction: column;
  background: $secondary-color;
  height: 30px;

  &__text {
    text-align: center;
    margin: auto;
    color: #fff;
  }
}
</style>
