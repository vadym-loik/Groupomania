<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }
}
</style>
