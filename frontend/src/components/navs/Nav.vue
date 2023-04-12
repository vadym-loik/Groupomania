<template>
  <div class="nav">
    <NavAuth />
    <NavLogin />
  </div>
</template>

<script>
import NavLogin from './NavLogin.vue';
import NavAuth from './NavAuth.vue';
// import { isUserAuth } from '../../api.js';

export default {
  name: 'Nav',
  components: {
    NavAuth,
    NavLogin,
  },
  methods: {
    // isUserConnected() {
    //   return isUserAuth();
    // },
  },
};
</script>

<style lang="scss" scoped></style>
