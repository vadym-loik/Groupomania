<template>
  <div class="nav-login">
    <nav class="nav-links">
      <div class="nav-login__wrap">
        <router-link :to="{ name: 'login' }" class="nav-login__link"
          >Login</router-link
        >

        <router-link :to="{ name: 'registration' }" class="nav-login__link">
          Registration</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.nav-login {
  color: #fff;
  font-size: 24px;

  &__link {
    text-decoration: none;
    color: inherit;
    font-size: medium;
  }

  &__link:not(:last-child) {
    margin-bottom: 5px;
  }

  &__link:hover {
    color: $main-color;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    &__wrap {
      flex-direction: row;
      margin: 0;
    }

    &__link {
      font-size: 26px;
    }

    &__link:not(:last-child) {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
}
</style>
