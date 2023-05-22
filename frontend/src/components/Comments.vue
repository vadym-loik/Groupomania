<template>
  <div class="comment">
    <img
      v-if="comment.user.imageUrl"
      :src="comment.user.imageUrl"
      class="comment__avatar"
      alt="Profile Picture"
    />
    <img
      v-else
      src="../../src/images/avatar_default.png"
      class="comment__avatar"
      alt="Profile Picture"
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

async function deleteComment() {
  // console.log(props.comment.id);
  confirm('Do you want to delete this comment?');

  try {
    const res = await Axios.delete(`/api/comments/${props.comment.id}`);
    console.log(res.data);

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

  margin-bottom: 10px;

  &__avatar {
    vertical-align: middle;
    width: 70px;
    height: 70px;
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
