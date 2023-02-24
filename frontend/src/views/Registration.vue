<template>
  <main class="registration">
    <AuthSection></AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';

export default {
  name: 'RegistrationPage',
  components: {
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
