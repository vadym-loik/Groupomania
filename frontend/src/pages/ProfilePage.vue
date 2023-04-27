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
import { useUserStore } from '../stores/userStore';

import { ref, onMounted } from 'vue';

const user = ref([]);
const userStore = useUserStore();

function getUserById() {
  user.value = userStore.getOneUser();
}

onMounted(getUserById);

// getUserById();

// function getUsers() {
//   axios
//     .get('http://localhost:8000/api/auth/profile/:id')
//     .then((res) => {
//       users.value = res.data;
//       console.log(users.value);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// onMounted(() => {
//   getUsers();
// });
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
