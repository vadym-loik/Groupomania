<template>
  <div class="edit-profile">
    <EditProfileForm />
  </div>
</template>

<script>
import EditProfileForm from './forms/EditProfileForm.vue';

export default {
  name: 'Profile',
  components: {
    EditProfileForm,
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
.edit-profile {
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
