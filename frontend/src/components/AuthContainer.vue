<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.auth-container {
  padding: 30px;
  max-width: 410px;
  width: 100%;
  background: #fff;
  background-color: #e6e1e1;
  border: 2px solid $main-color;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 450px;
  }
}
</style>
