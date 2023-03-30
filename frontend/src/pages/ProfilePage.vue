<template>
  <SectionWithHeaderSpacer />
  <Container>
    <div class="profile-page">
      <Profile :user="currentUser" />
    </div>
  </Container>
</template>

<script>
import Profile from '../components/Profile.vue';
import SectionWithHeaderSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';

export default {
  components: {
    Profile,
    SectionWithHeaderSpacer,
    Container,
  },
  data() {
    return {
      currentUser: {
        name: 'Vad',
        email: 'vad@fr.fr',
        picture: '../assets/icons/user.png',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-page {
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;
}
</style>
