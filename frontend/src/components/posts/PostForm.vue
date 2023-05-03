<template>
  <div class="post-form">
    <form class="post-form__form" @submit.prevent="createNewPost">
      <label class="post-form__label--title" for="postContent">New post</label>
      <div class="post-form__wrapper">
        <input
          class="post-form__text"
          type="text"
          name="text"
          placeholder="Write your text here"
          v-model.trim="text"
          required
        />
      </div>
      <div class="post-form__wrap">
        <label class="post-form__add--text" for="file"
          >Add image (png, jpg, jpeg)</label
        >
        <input
          class="post-form__choose"
          type="file"
          accept=".png, .jpg, .jpeg"
          id="file"
          name="image"
          v-on:change="imageUrl"
        />

        <Button type="submit" class="post-form__button">Create post</Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from '../Button.vue';
import { ref } from 'vue';
import Axios from '@/api';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const text = ref('');
const imageUrl = ref('');
const userId = ref(null);

async function createNewPost() {
  authStore.getUserId();
  userId.value = authStore.$state.userId;
  console.log(userId.value);
  try {
    await Axios.post(`/api/posts/`, {
      text: text.value,
      userId: userId.value,
      imageUrl: imageUrl.value,
    });
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &__form {
    width: 100%;
    padding-top: 10px;
  }

  &__label--title {
    font-size: 24px;
  }

  &__text {
    width: 100%;
    border: 2px solid $main-color;
    border-radius: 8px;
    height: 60px;
  }

  &__choose,
  &__button {
    font-size: 16px;
  }

  &__wrapper {
    padding: 10px 0;
  }

  &__wrap {
    display: flex;
    align-items: center;
  }

  &__button {
    width: 100px;
  }
}
</style>
