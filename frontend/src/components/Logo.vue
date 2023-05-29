<template>
  <router-link :to="{ name: 'home' }">
    <img
      class="logo"
      src="../assets/icons/icon-left-font-monochrome-black.svg"
      alt="logo"
    />
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  max-width: 70%;
  margin-left: 10px;
}
</style>
