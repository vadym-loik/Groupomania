<template>
  <div class="post">
    <div class="user-info">
      <img
        v-if="post.user.imageUrl"
        :src="post.user.imageUrl"
        class="post-avatar"
        alt="Profile Picture"
      />
      <img
        v-else
        src="../../images/avatar_default.png"
        class="post-avatar"
        alt="Profile Picture"
      />
      <MainTitle class="user-name">{{ post.user.name }}</MainTitle>
      <div v-if="isNew" class="new-post">New</div>
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
    <MainTitle class="comments-title">Comments</MainTitle>
    <CommentInput :post="post" />
    <Comments
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
import Comments from '../Comments.vue';
import Axios from '@/api';
import { onMounted, ref } from 'vue';
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

let isNew = ref(false);

// RENDER COMMENTS
onMounted(async () => {
  await commentStore.getAllComments(props.post.id);

  console.log(props.post.readers);

  if (!props.post.readers?.includes(';' + authStore.userId + ';')) {
    const newReader = props.post.readers + ';' + authStore.userId + ';';

    // update the post in beck to modify readers value of post with new readers
    await Axios.put(`/api/posts/${props.post.id}`, {
      readers: newReader,
    })
      .then(() => {
        console.log('Post updated!');
      })
      .catch((error) => {
        console.log(error);
      });

    isNew.value = true;
  }
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
  padding: 10px;
  border: 2px solid $main-color;
  border-radius: 8px;
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-bottom: 20px;

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

  &-img {
    width: 100%;
  }

  &-like {
    margin-bottom: 10px;
  }
}

.new-post {
  color: red;
  position: absolute;
  top: -20px;
  left: 0px;
}

.user-name,
.comments-title {
  font-size: medium;
}

.post-text {
  font-size: small;
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
