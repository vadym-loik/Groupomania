<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from '../components/auth/login/index.vue';
import AuthSection from '../components/auth/AuthSection.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
