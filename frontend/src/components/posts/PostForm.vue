<template>
  <div class="post-form">
    <form class="post-form__form" @submit.prevent="createNewPost">
      <MainTitle class="post-form__label--title" for="postContent"
        >New post</MainTitle
      >
      <div class="post-form__wrapper">
        <input
          class="post-form__text"
          autocomplete="text"
          type="text"
          name="text"
          placeholder="Write your text here"
          v-model.trim="text"
          required
        />
      </div>
      <div class="post-form__wrap">
        <label class="post-form__add--text" for="file">Add image </label>
        <input
          class="post-form__choose"
          ref="inputFile"
          type="file"
          id="file"
          name="file"
          @change="onFileChange"
        />

        <Button type="submit" class="post-form__button">Create post</Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from '../Button.vue';
import MainTitle from '../MainTitle.vue';
import Axios from '@/api';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();
const authStore = useAuthStore();
authStore.getUserId();
const { userId } = storeToRefs(authStore);
// console.log(userId.value);
const text = ref('');
const inputFile = ref(null);
const file = ref(null);

function onFileChange(event) {
  file.value = inputFile.value.files[0];

  console.log('line 62', file.value);
}

async function createNewPost() {
  if (!file.value) {
    try {
      const post = { text: text.value, userId: userId.value };

      const res = await Axios.post('/api/posts/', post);
      console.log(res);

      postStore.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  } else {
    const formData = new FormData();
    formData.append('file', file.value);
    formData.append('text', text.value);
    formData.append('userId', userId.value);

    try {
      const res = await Axios.post('/api/posts/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(res);

      postStore.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }

  text.value = '';
  inputFile.value = null;
  file.value = null;
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
    padding: 10px;
  }

  &__label--title {
    font-size: medium;
  }

  &__add--text,
  &__choose {
    font-size: small;
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
