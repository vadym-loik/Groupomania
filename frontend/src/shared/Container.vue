<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container',
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 1100px;
  margin: 0 auto;
}
</style>
