<template>
  <div class="nav-auth" v-if="isLoggedIn">
    <nav class="nav-links">
      <div class="nav-wrap">
        <router-link :to="{ name: 'home' }" class="nav-auth__link"
          >Home</router-link
        >
        /
        <router-link :to="{ name: 'profile-page' }" class="nav-auth__link"
          >Account</router-link
        >
        /
        <router-link
          :to="{ name: 'login' }"
          @click="authStore.logout()"
          class="nav-auth__link"
          >Logout</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { computed } from 'vue';

const authStore = useAuthStore();

const isLoggedIn = computed(() => authStore.isLoggedIn);
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
