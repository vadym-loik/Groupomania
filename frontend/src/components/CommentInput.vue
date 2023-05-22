<template>
  <form class="comments">
    <input
      class="comments__content"
      name="text"
      type="text"
      placeholder="Write your comment here"
      v-model.trim="text"
      required
    />
    <Button class="comments__btn" @click.prevent="addNewComment"
      >Add comment</Button
    >
  </form>
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
const user = ref({});

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
// console.log('line 37', props.post);

async function getOneUser(id) {
  await Axios.get(`/api/auth/profile/${id}`).then((res) => {
    user.value = res.data.user;
  });
}
getOneUser(authStore.userId);

async function addNewComment() {
  if (text.value) {
    const newComment = {
      text: text.value,
      userId: userId.value,
      postId: props.post.id,
      imageUrl: user.value.imageUrl,
    };

    console.log('line 48', newComment);

    try {
      const res = await Axios.post('/api/comments/', newComment);
      console.log(res.data);

      commentStore.addComment(res.data);
      commentStore.getAllComments();
    } catch (error) {
      console.log(error);
    }
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
