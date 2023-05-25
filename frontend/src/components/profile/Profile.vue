<template>
  <div class="profile" v-if="showProfile">
    <img
      v-if="user.imageUrl"
      :src="user.imageUrl"
      class="profile-picture"
      alt="Profile Picture"
    />
    <img
      v-else
      src="../../../src/images/avatar_default.png"
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
      <Button type="button" class="profile-delete__btn" @click="deleteProfile"
        >Delete</Button
      >
    </div>
  </div>

  <!-- EDIT PROFILE SECTION -->
  <form v-if="!showProfile" class="edit-profile" @submit.prevent="saveNewInfo">
    <div class="edit-profile__container">
      <label for="fileId" class="edit-profile__label"
        >Change profile picture :</label
      >
      <img
        v-if="user.imageUrl"
        :src="user.imageUrl"
        class="profile-picture"
        alt="Profile Picture"
      />
      <img
        v-else
        src="../../../src/images/avatar_default.png"
        class="profile-picture"
        alt="Profile Picture"
      />
      <input
        type="file"
        ref="inputFile"
        name="file"
        id="fileId"
        @change="onFileChange"
      />

      <label for="nameId">Change name :</label>
      <input
        type="text"
        name="name"
        id="nameId"
        autocomplete="name"
        v-model="name"
      />

      <label for="emailId">Change e-mail :</label>
      <input
        type="email"
        name="email"
        id="emailId"
        autocomplete="email"
        v-model="email"
      />

      <label for="passwordId">Change password :</label>
      <input
        type="password"
        name="password"
        id="passwordId"
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
const user = ref({});

const email = ref('');
const name = ref('');
const password = ref('');
const inputFile = ref(null);
const file = ref(null);

//get one user by id
async function getOneUser(id) {
  await Axios.get(`/api/auth/profile/${id}`).then((res) => {
    user.value = res.data.user;
  });
}

onMounted(() => {
  authStore.getUserId();
  getOneUser(authStore.userId);
});

// get avatar
function onFileChange(event) {
  file.value = inputFile.value.files[0];
  console.log(file.value);
}

//update user info
const saveNewInfo = async (id) => {
  const formData = new FormData();

  if (name.value !== '') {
    formData.append('name', name.value);
  }
  if (email.value !== '') {
    formData.append('email', email.value);
  }
  if (password.value !== '') {
    formData.append('password', password.value);
  }

  if (file.value !== null) {
    console.log(file.value);
    formData.append('file', file.value);
  }

  try {
    const res = await Axios.put(
      `/api/auth/profile/${authStore.userId}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  getOneUser(authStore.userId);
};

//delete user profile
async function deleteProfile() {
  confirm('Delete your profile?');
  await Axios.delete(`/api/auth/profile/${authStore.userId}`).then((res) =>
    console.log(res)
  );
  localStorage.removeItem('auth');
  authStore.logout();
  router.push('/registration');
}

//toggle function for switching between profile section and edit section
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

  @media (min-width: 768px) {
    .profile {
      margin: 15px 0 0 0;
    }

    &-info p,
    &-delete__btn,
    &-edit__btn {
      font-size: 18px;
    }
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
