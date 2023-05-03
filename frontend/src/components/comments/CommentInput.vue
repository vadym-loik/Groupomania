<template>
  <div class="comments">
    <input
      class="comments__content"
      type="text"
      placeholder="Write your comment here"
      v-model.trim="text"
    />
    <Button class="comments__btn" @click.prevent="addComment"
      >Add comment</Button
    >
  </div>
</template>

<script setup>
import Axios from '@/api';
import Button from '../Button.vue';
import { ref } from 'vue';

const text = ref('');
const userId = ref(null);
const postId = ref(null);

async function addComment() {
  await Axios.post('/api/comments', {
    text: text.value,
    userId: userId.value,
    postId: postId.value,
  });
}
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
