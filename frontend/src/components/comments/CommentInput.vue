<template>
  <div class="comments">
    <input
      class="comments__content"
      type="text"
      placeholder="Write your comment here"
    />
    <Button class="comments__btn">Add comment</Button>
  </div>
</template>

<script setup>
import Button from '../Button.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.comments {
  display: flex;
  justify-content: space-around;
  border: 2px solid $main-color;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &__btn {
    width: 100px;
    margin-left: 10px;
  }

  &__content {
    width: 100%;
    height: 40px;
    border: none;
  }
}
</style>
