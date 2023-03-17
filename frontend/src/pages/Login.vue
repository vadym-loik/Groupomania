<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import AuthSection from '../components/AuthSection.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
