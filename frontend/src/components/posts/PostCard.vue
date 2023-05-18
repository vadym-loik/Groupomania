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
        v-if="post.userId === currentUser"
        @click.prevent="deletePost"
      ></i>
    </div>
    <article class="post-text">{{ post.text }}</article>
    <div class="file-container">
      <img
        v-if="post.imageUrl"
        class="post-img"
        :src="post.imageUrl"
        alt="postImage"
      />
    </div>
    <MainTitle>Comments</MainTitle>
    <CommentInput :post="post" />
    <Comment
      v-for="comment in commentStore.comments.filter(
        (comment) => comment.postId === props.post.id
      )"
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
import { onMounted } from 'vue';
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

// RENDER COMMENTS
onMounted(async () => {
  await commentStore.getAllComments();
});

// DELETE ONE POST
async function deletePost() {
  confirm('Are you sure that you want to delete this post?');

  try {
    console.log(props.post.id);
    const res = await Axios.delete(`/api/posts/${props.post.id}`);
    console.log(res);

    // postStore.deletePost(res.data);
    postStore.getAllPosts();
  } catch (error) {
    console.log(error);
  }
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
    max-width: 500px;
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
