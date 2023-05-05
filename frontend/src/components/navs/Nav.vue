<template>
  <div class="nav">
    <NavAuth v-if="authStore.isLoggedIn" />
    <NavLogin v-else />
  </div>
</template>

<script setup>
import NavAuth from './NavAuth.vue';
import NavLogin from './NavLogin.vue';

import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<style lang="scss" scoped></style>
