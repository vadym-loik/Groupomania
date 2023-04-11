<template>
  <form class="edit-profile" @submit.prevent="modifyProfile">
    <div class="edit-profile__container">
      <label for="file" class="edit-profile__label"
        >Change profile picture :</label
      >
      <img
        src="../../assets/images/IMG_20150915_153914.jpg"
        class="edit-profile__avatar"
      />
      <input type="file" ref="file" name="file" id="file" />

      <label for="name">Change name :</label>
      <input type="text" name="name" />

      <label for="email">Change e-mail :</label>
      <input type="email" name="email" />

      <label for="password">Change password :</label>
      <input type="password" name="password" placeholder="Enter new password" />

      <Button type="submit" class="save"> Save </Button>
    </div>
  </form>
</template>

<script>
import Button from '../Button.vue';

export default {
  name: 'EditProfile',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
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
</style>
