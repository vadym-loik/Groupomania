<template>
  <div class="profile" v-if="showProfile">
    <img
      :src="'../src/assets/icons/avatar_default.png' || user.imageUrl"
      class="profile-picture"
      alt="Profile Picture"
    />

    <div class="profile-info">
      <p>Name: {{ user.name }}</p>
      <p>e-mail: {{ user.email }}</p>
    </div>
    <div class="profile-buttons">
      <Button class="profile-edit__btn" @click.prevent="toggleProfile"
        >Edit</Button
      >
      <Button type="button" class="delete-profile" @click="deleteProfile"
        >Delete</Button
      >
    </div>
  </div>

  <!-- EDIT PROFILE SECTION -->
  <form v-if="!showProfile" class="edit-profile" @submit.prevent="saveNewInfo">
    <div class="edit-profile__container">
      <label for="file" class="edit-profile__label"
        >Change profile picture :</label
      >
      <img
        src="@/assets/icons/avatar_default.png"
        class="edit-profile__avatar"
      />
      <input
        type="file"
        ref="file"
        name="file"
        id="file"
        v-on:change="imageUrl"
      />

      <label for="name">Change name :</label>
      <input type="text" name="name" v-model="name" />

      <label for="email">Change e-mail :</label>
      <input type="email" name="email" v-model="email" />

      <label for="password">Change password :</label>
      <input
        type="password"
        name="password"
        placeholder="Enter new password"
        v-model="password"
      />
      <div class="btn-wrapper">
        <Button
          type="submit"
          class="save"
          @click="saveNewInfo"
          @click.prevent="toggleProfile"
        >
          Save
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup>
import Button from '../Button.vue';
import { ref, onMounted } from 'vue';
import Axios from '@/api';
import router from '@/router/index';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const showProfile = ref(true);
const editProfile = ref(false);
const user = ref([]);

const email = ref('');
const name = ref('');
const password = ref('');
const imageUrl = ref('');

//get one user by id
async function getOneUser(id) {
  await Axios.get(`/api/auth/profile/${id}`).then((res) => {
    user.value = res.data.user;
  });
}

//update user info
const saveNewInfo = async (id) => {
  const newInfo = {};

  if (name.value != '') {
    newInfo.name = name.value;
  }
  if (email.value != '') {
    newInfo.email = email.value;
  }
  if (password.value != '') {
    newInfo.password = password.value;
  }
  if (imageUrl.value != '') {
    newInfo.imageUrl = imageUrl.value;
  }

  await Axios.put(`/api/auth/profile/${user.value.id}`, newInfo).then((res) => {
    console.log(res.data);
    // getOneUser(user.value.id);
  });

  user.value = newInfo;
};

//delete user profile
async function deleteProfile() {
  confirm('Delete your profile?');
  await Axios.delete(`/api/auth/profile/${user.value.id}`).then((res) =>
    console.log(res)
  );
  localStorage.removeItem('auth');
  router.push('/registration');
}

//toggle function for switching between profile section and edit section
function toggleProfile() {
  showProfile.value = !showProfile.value;
  editProfile.value = !editProfile.value;
}

onMounted(() => {
  authStore.getUserId;
  getOneUser(authStore.$state.userId);
});
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

.edit-profile {
  &__container {
    display: flex;
    flex-direction: column;
    max-width: 500px;

    align-items: center;
    background-color: #e6e1e1;
    border: 2px solid $main-color;
    border-radius: 8px;
    padding: 20px;
    margin: 15px auto;
  }

  input {
    margin-bottom: 10px;
  }
  label {
    margin-bottom: 5px;
  }

  &__avatar {
    width: 30%;
    border-radius: 50%;
  }
}

.btn-wrapper {
  width: 30%;
}
</style>
