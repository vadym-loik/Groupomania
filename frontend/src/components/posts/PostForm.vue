<template>
  <div class="post-form">
    <form class="post-form__form" @submit.prevent="createNewPost">
      <MainTitle class="post-form__label--title" for="postContent"
        >New post</MainTitle
      >
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
        <label class="post-form__add--text" for="file">Add image </label>
        <input
          class="post-form__choose"
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
const selectedFile = ref(null);

function onFileChange(event) {
  selectedFile.value = event.target.files[0];
  console.log(selectedFile.value);
}

async function createNewPost() {
  if (selectedFile.value === null) {
    const newPost = {
      text: text.value,
      userId: userId.value,
    };

    try {
      const res = await Axios.post('/api/posts/', newPost);
      console.log(res);

      postStore.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  } else {
    debugger;
    const formData = new FormData();
    // formData.append('file', selectedFile.value);
    const newPost = {
      text: text.value,
      userId: userId.value,
      imageUrl: selectedFile.value,
    };
    formData.append('newPost', JSON.stringify(newPost));

    try {
      const res = await Axios.post('/api/posts/', newPost);
      console.log(res);

      postStore.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }

  text.value = '';
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
