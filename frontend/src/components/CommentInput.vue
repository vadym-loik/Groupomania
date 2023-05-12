<template>
  <div class="comments">
    <input
      class="comments__content"
      name="text"
      type="text"
      placeholder="Write your comment here"
      v-model.trim="text"
    />
    <Button class="comments__btn" @click.prevent="addNewComment"
      >Add comment</Button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import Button from './Button.vue';
import Axios from '../api';
import { useAuthStore } from '../stores/authStore';
import { useCommentStore } from '../stores/commentStore';

const authStore = useAuthStore();
const commentStore = useCommentStore();

const text = ref('');
const { userId } = storeToRefs(authStore);

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

async function addNewComment() {
  const newComment = {
    text: text.value,
    userId: userId.value,
    postId: props.post.id,
  };

  try {
    const res = await Axios.post('/api/comments/', newComment);
    console.log(res.data);

    commentStore.addComment(res.data);
  } catch (error) {
    console.log(error);
  }

  text.value = '';
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
