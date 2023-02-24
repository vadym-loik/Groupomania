<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AuthSection',
};
</script>

<style lang="scss" scoped>
.auth-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url();
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
}
</style>
