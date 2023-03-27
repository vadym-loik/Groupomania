<template>
  <div class="post-form">
    <form class="post-form__form">
      <label class="post-form__label--title" for="postContent">New post</label>
      <div class="post-form__wrapper">
        <textarea
          class="post-form__text"
          name="postContent"
          id="postContent"
          cols="150"
          rows="8"
          placeholder="Write your text here"
        ></textarea>
      </div>

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

      <Button type="submit" class="post-form__button">Publish</Button>
    </form>
  </div>
</template>

<script>
import Button from '../Button.vue';

export default {
  name: 'PostForm',
  components: { Button },
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
  }

  &__label--title {
    font-size: 24px;
  }

  &__text {
    width: 100%;
    border: 2px solid $main-color;
    border-radius: 8px;
  }

  &__choose,
  &__button {
    font-size: 16px;
  }

  &__wrapper {
    padding: 15px 0 15px 0;
  }

  &__button {
    width: 100px;
  }
}
</style>
