<template>
  <div class="nav-auth" v-if="authStore.loggedIn">
    <nav class="nav-links">
      <div class="nav-wrap">
        <router-link :to="{ name: 'profile-page' }" class="nav-auth__link"
          >Account</router-link
        >
        /
        <router-link :to="{ name: 'login' }" class="nav-auth__link"
          >Logout</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
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
