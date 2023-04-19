<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <div class="user-info">
      <img
        class="post-avatar"
        src="../../assets/icons/avatar_default.png"
        alt="avatar"
      />
      <MainTitle class="user-name">{{ users.userId }}</MainTitle>
      <font-awesome-icon
        class="post-edit"
        :icon="['far', 'edit']"
        style="color: #ff662d"
      />
    </div>
    <article class="post-text">{{ post.text }}</article>
    <div class="file-container">
      <img
        v-if="post.imageUrl != ''"
        class="post-img"
        :src="post.imageUrl"
        alt="post image"
      />
    </div>
    <div class="post-like">
      <font-awesome-icon
        class="post-like"
        :icon="['far', 'heart']"
        style="color: #ff662d"
      />
    </div>
    <MainTitle>Comments</MainTitle>
    <CommentInput />
    <Comment
      v-show="comments.length > 0"
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
import MainTitle from '../MainTitle.vue';
import Comment from '../comments/CommentsItem.vue';
import CommentInput from '../comments/CommentInput.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  post: {
    type: Object,
    isAdmin: Boolean,
    userId: Number,
    postId: Number,
  },
});

const comments = ref([]);
const users = ref([]);
console.log(users);

onMounted(async () => {
  await axios
    .get('http://localhost:3000/comments')
    .then((res) => {
      comments.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get('http://localhost:3000/users')
    .then((res) => {
      users.value = res.data;
      console.log(users.value);
    })
    .catch((err) => {
      console.log(err);
    });
});
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
</style>
