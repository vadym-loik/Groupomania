<template>
  <div class="profile" v-if="showProfile">
    <img
      src="@/assets/icons/avatar_default.png"
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
      <Button>Delete</Button>
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
      <input type="file" ref="file" name="file" id="file" />

      <label for="name">Change name :</label>
      <input type="text" name="name" :value="name" />

      <label for="email">Change e-mail :</label>
      <input type="email" name="email" :value="email" />

      <label for="password">Change password :</label>
      <input type="password" name="password" placeholder="Enter new password" />

      <Button
        type="submit"
        class="save"
        @click="saveNewInfo"
        @click.prevent="toggleProfile"
      >
        Save
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from '../Button.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '../../stores/userStore';
import Axios from '@/api';

//use userStore
const userStore = useUserStore();
const user = ref({});
const email = ref('');
// const user = userStore.$state.user;

//take one user by id
async function getOneUser(id) {
  console.log(id);
  await Axios.get(`/api/auth/profile/${id}`).then((response) => {
    // console.log(response.data);
    // userStore.setUser(response.data);
    user.value = response.data.user;
    console.log(user.value);
  });
}

onMounted(() => {
  const token = localStorage.getItem('auth');
  const [header, payload] = token?.split('.');
  const decodedPayload = JSON.parse(window.atob(payload));
  console.log(payload);

  getOneUser(decodedPayload?.userId);
});

//modify user info
function saveNewInfo() {
  userStore.modifyUserName;
}

const showProfile = ref(true);
const editProfile = ref(false);

function toggleProfile() {
  console.log('toggle');
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

.save {
  display: block;
}
</style>
