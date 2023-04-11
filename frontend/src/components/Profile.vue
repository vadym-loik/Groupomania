<template>
  <div class="profile">
    <img
      src="../assets/images/IMG_20150915_153914.jpg"
      class="profile-picture"
      alt="Profile Picture"
    />

    <div class="profile-info">
      <p>Name: {{ name }}</p>
      <p>e-mail: {{ email }}</p>
    </div>
    <div class="profile-buttons">
      <Button class="profile-edit__btn">Edit</Button>
      <Button>Delete</Button>
    </div>
  </div>
  <EditProfile />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Button from './Button.vue';
import EditProfile from './EditProfile.vue';
import { computed } from '@vue/reactivity';
import axios from 'axios';

const user = ref();

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/profile');
  user.value = response.user;
});

// export default {
//   name: 'Profile',
//   components: {
//     Button,
//     EditProfile,
//   },
//   data() {
//     return {
//       showProfile: true,
//       editProfile: false,
//     };
//   },
//   props: {
//     user: {
//       type: Object,
//       required: true,
//     },
//   },
//   methods: {
//     toggleProfile() {
//       this.showProfile = !this.showProfile;
//       this.editProfile = !this.editProfile;
//     },
//   },
// };
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.profile {
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 500px;

  align-items: center;
  background-color: #e6e1e1;
  border: 2px solid $main-color;
  border-radius: 8px;
  padding: 20px;
  margin: 15px auto;

  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  &-header h2 {
    margin: 0;
  }

  &-info p {
    margin-bottom: 10px;
  }

  /* &-picture {
    width: 200px;
    margin-bottom: 20px;
  } */

  &-picture {
    width: 30%;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  &-close {
    width: 24px;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  &-buttons {
    display: block;
  }

  &-edit__btn {
    margin-bottom: 10px;
  }
}
</style>
