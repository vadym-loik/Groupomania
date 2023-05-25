<template>
  <div class="comment">
    <img
      v-if="props.comment.user.imageUrl"
      :src="props.comment.user.imageUrl"
      class="comment__avatar"
      alt="Profile avatar"
    />
    <img
      v-else
      src="../../src/images/avatar_default.png"
      class="comment__avatar"
      alt="Profile avatar"
    />
    <div class="comment__wrap">
      <p class="comment__text">
        {{ comment.text }}
      </p>
      <i
        class="close fa-solid fa-xmark"
        v-if="props.comment.userId === currentUser"
        @click.prevent="deleteComment"
      ></i>
    </div>
  </div>
</template>

<script setup>
import Axios from '../api';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useCommentStore } from '../stores/commentStore';

const authStore = useAuthStore();
const commentStore = useCommentStore();
const { userId } = storeToRefs(authStore);
const currentUser = userId;

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

//delete comment function
async function deleteComment() {
  confirm('Do you want to delete this comment?');

  try {
    const res = await Axios.delete(`/api/comments/${props.comment.id}`);

    commentStore.deleteComment(res.data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.comment {
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &__avatar {
    vertical-align: middle;
    width: 55px;
    height: 55px;
    border-radius: 50%;

    margin-right: 10px;
  }

  &__wrap {
    border: none;
    background-color: #e6e1e1;
    border-radius: 8px;
    padding: 10px 25px 10px 10px;
    position: relative;
  }

  &__text {
    font-size: small;
  }

  @media (min-width: 768px) {
    &__text {
      font-size: 16px;
    }
  }
}

.fa-xmark {
  position: absolute;
  top: 5px;
  right: 5px;
}

.close {
  cursor: pointer;
}
</style>
