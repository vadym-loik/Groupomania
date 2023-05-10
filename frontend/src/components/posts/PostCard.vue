<template>
  <div class="post">
    <div class="user-info">
      <img
        class="post-avatar"
        src="../../assets/icons/avatar_default.png"
        alt="avatar"
      />
      <MainTitle class="user-name">{{ post.user.name }}</MainTitle>
      <i
        class="close fa-solid fa-xmark"
        v-if="post.user.id === currentUser"
        @click.prevent="deletePost"
      ></i>
    </div>
    <article class="post-text">{{ post.text }}</article>
    <div class="file-container">
      <img
        v-if="post.imageUrl != null"
        class="post-img"
        :src="post.imageUrl"
        alt="post image"
      />
    </div>
    <div class="post-like"></div>
    <MainTitle>Comments</MainTitle>
    <CommentInput :post="post" />
    <Comment
      v-for="comment in commentStore.comments.filter(
        (comment) => comment[0]?.postId === props.post.id
      )[0]"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
import MainTitle from '../MainTitle.vue';
import CommentInput from '../CommentInput.vue';
import Comment from '../Comments.vue';
import Axios from '@/api';
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCommentStore } from '@/stores/commentStore';
import { usePostStore } from '@/stores/postStore';
import { useAuthStore } from '@/stores/authStore';

const commentStore = useCommentStore();
const postStore = usePostStore();
const authStore = useAuthStore();

const { userId } = storeToRefs(authStore);
const currentUser = userId;

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
// console.log(props.post);

const comments = ref([]);

// GET STATE COMMENTS
// const comments = computed(() => {
//   // console.log(commentStore.comments);
//   return commentStore.comments;
// });
// console.log(comments.value);

// RENDER COMMENTS
onMounted(async () => {
  await commentStore.getComments(props.post.id);
  comments.value = commentStore.comments;
  console.log(comments.value);
});

// DELETE ONE POST
async function deletePost() {
  confirm('Are you sure that ypu want to delete this post?');

  try {
    await Axios.delete(`/api/posts/${props.post.id}`).then((res) =>
      console.log(res)
    );
  } catch (error) {
    console.log(error);
  }

  postStore.getAllPosts();
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.user-info {
  display: flex;
  align-items: center;
}

.close-icon {
  width: 15px;
  position: absolute;
  right: 10px;
  top: 15px;
}

.post {
  padding: 15px;
  border: 2px solid $main-color;
  border-radius: 8px;
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-bottom: 10px;

  &-edit {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 24px;
  }

  &-avatar {
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
  }

  &-avatar,
  &-text,
  &-img {
    margin-bottom: 10px;
  }

  &-like {
    margin-bottom: 10px;
  }

  &-img {
    max-width: 380px;
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
