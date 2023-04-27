<template>
  <div class="profile" v-if="showProfile">
    <img
      src="@/assets/icons/avatar_default.png"
      class="profile-picture"
      alt="Profile Picture"
    />

    <div class="profile-info">
      <p>Name: {{ user }}</p>
      <p>e-mail: {{ user }}</p>
    </div>
    <div class="profile-buttons">
      <Button class="profile-edit__btn" @click.prevent="toggleProfile"
        >Edit</Button
      >
      <Button>Delete</Button>
    </div>
  </div>
  <EditProfile v-if="editProfile" />
</template>

<script setup>
import Button from '../Button.vue';
import EditProfile from './EditProfile.vue';
import { ref } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
});

const showProfile = ref(true);
const editProfile = ref(false);

function toggleProfile() {
  showProfile.value = !showProfile.value;
  editProfile.value = !editProfile.value;
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
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
