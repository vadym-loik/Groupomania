<template>
  <div class="post-form">
    <form class="post-form__form" @submit.prevent="createPost">
      <label class="post-form__label--title" for="postContent">New post</label>
      <div class="post-form__wrapper">
        <input
          class="post-form__text"
          type="text"
          name="text"
          placeholder="Write your text here"
          v-model="post.text"
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
          @change="upload($event)"
        />

        <Button type="submit" class="post-form__button" @click:prevent=""
          >Create post</Button
        >
      </div>
    </form>
  </div>
</template>

<script>
import Button from '../Button.vue';
// import Axios from '@/api.js';
import { getAllPosts } from '../../api';

export default {
  name: 'PostForm',
  components: { Button },
  data() {
    return {
      post: {
        text: '',
      },
    };
  },
  methods: {
    upload(event) {
      this.file = event.target.files[0];
    },
    createPost(event) {
      // make API call to create post
      // Axios.post('/api/posts', {
      //   content: this.content,
      // })
      //   .then((response) => {
      //     // handle successful response
      //     console.log(response.data);
      //     // reset form fields
      //     this.content = '';
      //   })
      //   .catch((error) => {
      //     // handle error
      //     console.log(error);
      //   });
      const newPost = {
        postId: Date.now(),
        text: this.text,
        imageUrl: this.imageUrl,
        name: this.name,
      };
      this.getAllPosts().push(newPost);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &__form {
    max-width: 60%;
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
