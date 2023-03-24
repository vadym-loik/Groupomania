<template>
  <div class="nav">
    <nav class="nav__links">
      <router-link :to="{ name: 'login' }" class="nav__link">Login</router-link>
      /
      <router-link :to="{ name: 'registration' }" class="nav__link">
        Registration</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.nav {
  color: #fff;
  font-size: 24px;

  &__link {
    text-decoration: none;
    color: inherit;
  }

  &__link:hover {
    color: $main-color;
  }
}
</style>
