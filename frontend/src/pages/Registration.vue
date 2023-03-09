<template>
  <main class="registration">
    <!-- <SectionWithHeaderSpacer> -->
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
    <!-- </SectionWithHeaderSpacer> -->
  </main>
</template>

<script>
// import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import AuthSection from '../components/auth/AuthSection.vue';
import RegistrationForm from '../components/auth/registration/index.vue';

export default {
  name: 'RegistrationPage',
  components: {
    // SectionWithHeaderSpacer,
    AuthSection,
    RegistrationForm,
  },
};
</script>

<style lang="scss" scoped></style>
