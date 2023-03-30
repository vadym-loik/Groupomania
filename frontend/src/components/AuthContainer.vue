<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthContainer',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.auth-container {
  padding: 30px;
  max-width: 410px;
  width: 100%;
  background: #fff;
  background-color: #f8f8f8;
  border: 2px solid $main-color;
  border-radius: 8px;
}
</style>
