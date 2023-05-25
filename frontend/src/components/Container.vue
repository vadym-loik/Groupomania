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
  max-width: 500px;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  /* @media (min-width: 1100px) {
    max-width: 1200px;
  } */
}

/* .container {
  max-width: 1100px;
  margin: 0 auto;
} */
</style>
