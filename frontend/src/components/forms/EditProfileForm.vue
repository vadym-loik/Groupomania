<template>
  <form @submit.prevent="editProfile">
    <label for="file" class="edit-profile__label">
      <div>Change profile picture :</div>
      <div class="edit-profile__container">
        <img :src="user.picture" class="edit-profile__avatar" />
      </div>
    </label>
    <input type="file" ref="file" name="file" id="file" @change="selectFile" />

    <label for="name">Change name :</label>
    <input type="text" name="name" v-model="updateUser.name" />

    <label for="email">Change e-mail :</label>
    <input type="email" name="email" v-model="updateUser.email" />

    <label for="password">Change password :</label>
    <input
      type="password"
      name="password"
      placeholder="Enter new password"
      v-model="updateUser.password"
    />

    <Button @click.prevent="modifyProfile" class="save"> Save </Button>
  </form>
</template>

<script>
import Button from '../Button.vue';

export default {
  name: 'EditProfile',
  components: {
    Button,
  },
  data() {
    return {
      updateUser: {
        name: this.user.name,
        email: this.user.email,
        password: null,
      },
    };
  },
  props: {
    user: Object,
  },
  methods: {
    modifyProfile() {},
  },
};
</script>

<style lang="scss" scoped></style>
