<template>
  <div class="nav-auth">
    <div class="nav-wrap">
      <router-link :to="{ name: 'profile-page' }" class="nav-auth__link"
        >Account</router-link
      >
      /
      <router-link :to="{ name: 'login' }" class="nav-auth__link"
        >Logout</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavAuth',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.nav-auth {
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
