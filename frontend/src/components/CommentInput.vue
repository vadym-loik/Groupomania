<template>
  <div class="comments">
    <input
      class="comments__content"
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
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import Button from './Button.vue';
import Axios from '../api';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
const text = ref('');
const { userId } = storeToRefs(authStore);

const props = defineProps({
  post: {
    id: Number,
  },
});

async function addNewComment() {
  const newComment = {
    text: text.value,
    userId: userId.value,
    postId: props.post.id,
  };

  try {
    await Axios.post('/api/comments/', newComment).then((res) =>
      console.log(res)
    );
  } catch (error) {
    console.log(error);
  }
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
