<template>
  <SectionWithHeaderSpacer />
  <Container>
    <div class="profile-page">
      <Profile v-for="user in users" :key="user.userId" :user="user" />
    </div>
  </Container>
</template>

<script setup>
import Profile from '../components/profile/Profile.vue';
import SectionWithHeaderSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';

import { onMounted, ref } from 'vue';
import axios from 'axios';

const users = ref([]);

function getUsers() {
  axios
    .get('http://localhost:3000/profile')
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  getUsers();
});
// import { getUserData } from '../api.js';

// export default {
//   components: {
//     Profile,
//     SectionWithHeaderSpacer,
//     Container,
//   },
//   data() {
//     return {
//       currentUser: {},
//     };
//   },
//   mounted() {
//     // this.currentUser = getUserData();
//   },
//   methods: {},
// };
</script>

<style lang="scss" scoped>
.profile-page {
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;
}
</style>
