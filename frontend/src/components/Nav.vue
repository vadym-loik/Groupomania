<template>
  <div class="nav">
    <nav class="nav-links">
      <div v-if="!isUserConnected()" class="nav-wrap">
        <router-link :to="{ name: 'login' }" class="nav-link"
          >Login</router-link
        >
        /
        <router-link :to="{ name: 'registration' }" class="nav-link">
          Registration</router-link
        >
      </div>
      <div v-if="isUserConnected()" class="nav-wrap">
        <router-link :to="{ name: 'profile-page' }" class="nav-link"
          >Account</router-link
        >
        /
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        /
        <router-link :to="{ name: 'login' }" class="nav-link"
          >Logout</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { isUserAuth } from '../api.js';

export default {
  name: 'Nav',
  methods: {
    isUserConnected() {
      return isUserAuth();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.nav {
  color: #fff;
  font-size: 24px;

  &-link {
    text-decoration: none;
    color: inherit;
  }

  &-link:hover {
    color: $main-color;
  }
}
</style>
