<template>
  <div class="comments">
    <input
      class="comments__content"
      type="text"
      placeholder="Write your comment here"
      v-model="text"
    />
    <Button class="comments__btn" @click.prevent="addComment"
      >Add comment</Button
    >
  </div>
</template>

<script setup>
import Button from '../Button.vue';
import { ref } from 'vue';
import { useCommentStore } from '@/stores/commentStore';

const text = ref('');
const commentStore = useCommentStore();

async function addComment() {
  await commentStore.addComment();
  text.value = commentStore.text;
}

// async function addComment() {
//   await Axios.post('/api/comments', {
//     text: text.value,
//   });
// }
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
