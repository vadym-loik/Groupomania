<template>
  <div class="section-spacer">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section-spacer {
  padding-top: 90px;

  @media (min-width: 768px) {
    padding-top: 110px;
  }
}
</style>
