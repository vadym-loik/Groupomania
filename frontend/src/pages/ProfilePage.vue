<template>
  <SectionWithHeaderSpacer />
  <Container>
    <div class="profile-page">
      <Profile />
    </div>
  </Container>
</template>

<script setup>
import Profile from '../components/profile/Profile.vue';
import SectionWithHeaderSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';
</script>

<style lang="scss" scoped>
.profile-page {
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;
}
</style>
