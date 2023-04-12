<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <div class="user-info">
      <img class="post-avatar" src="" alt="avatar" />
      <MainTitle class="user-name">{{}}</MainTitle>
    </div>
    <article class="post-text">{{ post.text }}</article>
    <img class="post-img" src="" alt="post image" />
    <div class="post-like"></div>
    <MainTitle>Comments</MainTitle>
    <CommentInput />
    <Comments
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
import MainTitle from '../MainTitle.vue';
import Comments from '../comments/CommentsList.vue';
import CommentInput from '../comments/CommentInput.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const comments = ref([]);

onMounted(() => {
  axios
    .get('http://localhost:3000/comments')
    .then((res) => {
      comments.value = res.data;
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
