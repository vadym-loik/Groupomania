<template>
  <main class="profile">
    <SectionWithHeaderSpacer />
    <Container>
      <div class="profile--wrap">
        <Profile />
      </div>
    </Container>
  </main>
</template>

<script setup>
import Profile from '../components/profile/Profile.vue';
import SectionWithHeaderSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';
</script>

<style lang="scss" scoped>
.profile--wrap {
  padding: 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
}
</style>
