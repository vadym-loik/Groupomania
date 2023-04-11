<template>
  <div class="nav-login">
    <nav class="nav-links">
      <div class="nav-login__wrap">
        <router-link :to="{ name: 'login' }" class="nav-login__link"
          >Login</router-link
        >
        /
        <router-link :to="{ name: 'registration' }" class="nav-login__link">
          Registration</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.nav-login {
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
