<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script setup>
import LoginForm from '../components/forms/LoginForm.vue';
import AuthSection from '../components/AuthSection.vue';
</script>

<style lang="scss" scoped></style>
