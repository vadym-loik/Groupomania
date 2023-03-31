<template>
  <div class="profile">
    <div class="profile-body">
      <div class="profile-wrap">
        <img
          :src="user.picture"
          class="profile-picture"
          alt="Profile Picture"
        />
      </div>
    </div>
    <div class="profile-header">
      <h2>Name: {{ user.name }}</h2>
      <p>email: {{ user.email }}</p>
    </div>
    <div class="profile-buttons">
      <Button class="profile-edit__btn">Edit</Button>
      <Button class="profile-edit__btn">Save</Button>
      <Button>Delete</Button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Profile',
  components: {
    Button,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
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

  &-header p {
    margin: 5px 0 0;
  }

  &-picture {
    width: 200px;
    margin-bottom: 20px;
  }

  &-picture img {
    width: 100%;
    border-radius: 50%;
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
