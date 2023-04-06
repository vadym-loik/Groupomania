<template>
  <div class="post">
    <div class="user-info">
      <img class="post-avatar" src="../../assets/icons/user.png" alt="avatar" />
      <MainTitle class="user-name">{{ posts.name }}</MainTitle>
    </div>
    <font-awesome-icon
      class="post-edit"
      :icon="['fas', 'pen-to-square']"
      style="color: #ff662d"
    />
    <article class="post-text">
      {{ posts.text }}
    </article>
    <img
      class="post-img"
      src="../../assets/images/2A2A9295crop.jpg"
      alt="post image"
    />
    <div class="post-like">
      <font-awesome-icon :icon="['far', 'heart']" style="color: #ff662d" />
    </div>
    <MainTitle>Comments</MainTitle>
    <div class="post-comments">
      <img
        class="post-comment__avatar"
        src="../../assets/icons/user.png"
        alt="avatar"
      />
      <input
        class="post-comment__content"
        type="text"
        placeholder="Write your comment here"
      />
      <Button class="post-comment__btn">Add comment</Button>
    </div>

    <div class="post-comment">
      <img
        src="../../assets/icons/user.png"
        class="post-comment__avatar"
        alt="User avatar"
      />
      <p class="post-comment__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, placeat?
      </p>
      <font-awesome-icon
        class="close-icon"
        :icon="['fas', 'xmark']"
        style="color: #ff662d"
      />
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue';
import MainTitle from '../MainTitle.vue';
import getAllPosts from '../../api';

export default {
  name: 'PostCard',
  components: {
    Button,
    MainTitle,
  },
  data() {
    return {
      posts: getAllPosts(),
    };
  },
};
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
  max-width: 60%;
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
  &-img,
  &-comments {
    margin-bottom: 10px;
  }

  &-like {
    margin-bottom: 10px;
  }

  &-img {
    max-width: 380px;
  }

  &-comments {
    display: flex;
    justify-content: space-around;
    border: 2px solid $main-color;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  &-comment__btn {
    width: 100px;
    margin-left: 10px;
  }

  &-comment__content {
    width: 100%;
    height: 70px;
    border: none;
  }

  &-comment {
    display: flex;
    align-items: center;
    position: relative;
  }

  &-comment__avatar {
    margin-right: 10px;
  }

  &-comment__text {
    border: none;
    background-color: #e6e1e1;
    border-radius: 8px;
    padding: 10px 25px 10px 10px;
  }
}
</style>
