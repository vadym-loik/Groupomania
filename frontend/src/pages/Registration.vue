<template>
  <main class="registration">
    <!-- <SectionWithHeaderSpacer> -->
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
    <!-- </SectionWithHeaderSpacer> -->
  </main>
</template>

<script setup>
// import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import AuthSection from '@/components/AuthSection.vue';
import RegistrationForm from '@/components/forms/RegistrationForm.vue';
</script>

<style lang="scss" scoped></style>
