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
          name="file"
          @change="selectFile"
        />

        <Button type="submit" class="post-form__button">Create post</Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Button from '../Button.vue';
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStore';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();
const authStore = useAuthStore();
authStore.getUserId();
const { userId } = storeToRefs(authStore);
// console.log(userId.value);
const text = ref('');
const imageUrl = ref('');

function selectFile(event) {
  imageUrl.value = event.target.files[0];
}

function createNewPost() {
  const newPost = {
    userId: userId.value,
    text: text.value,
  };

  if (imageUrl.value != '') {
    newPost.imageUrl = imageUrl.value;
  }

  postStore.addNewPost(newPost);
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
