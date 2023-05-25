<template>
  <main class="registration">
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
  </main>
</template>

<script setup>
import AuthSection from '@/components/AuthSection.vue';
import RegistrationForm from '@/components/forms/RegistrationForm.vue';
</script>

<style lang="scss" scoped></style>
