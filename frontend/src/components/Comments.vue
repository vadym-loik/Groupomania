<template>
  <div class="comment">
    <img
      src="@/assets/icons/avatar_default.png"
      class="comment__avatar"
      alt="User avatar"
    />
    <div class="comment__wrap">
      <p class="comment__text">
        {{ comment.text }}
      </p>
      <i
        class="close fa-solid fa-xmark"
        v-if="props.comment.userId === currentUser"
        @click="deleteComment"
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
// console.log(currentUser.value);

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

async function deleteComment() {
  try {
    await Axios.delete(`/api/comments/${props.comment.id}`).then((res) =>
      console.log(res)
    );
  } catch (error) {
    console.log(error);
  }

  commentStore.getComments();
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.comment {
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  &__avatar {
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
