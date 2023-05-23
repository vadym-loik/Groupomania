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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;
  padding: 10px;
}
</style>
