<template>
  <div class="nav-auth">
    <nav class="nav-links">
      <div class="nav-wrap">
        <router-link :to="{ name: 'home' }" class="nav-auth__link"
          >Home</router-link
        >

        <router-link :to="{ name: 'profile-page' }" class="nav-auth__link"
          >Profile</router-link
        >

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
import { useAuthStore } from '../../stores/authStore';
import { ref } from 'vue';

let isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  console.log('WORKING');
}

const authStore = useAuthStore();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.nav-wrap {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.nav-auth {
  color: #fff;
  font-size: medium;

  &__link {
    text-decoration: none;
    color: inherit;
  }

  &__link:not(:last-child) {
    margin-bottom: 5px;
  }

  &__link:hover {
    color: $main-color;
  }
}

/* .burger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.burger-menu span {
  width: 30px;
  height: 4px;
  background-color: #fff;
  margin-bottom: 6px;
} */

/* .nav-links .nav-wrap {
  display: none;
}

.nav-links .nav-wrap.active {
  display: flex;
  flex-direction: column;
} */
</style>
