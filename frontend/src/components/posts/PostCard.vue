<template>
  <div class="post">
    <div class="user-info">
      <img class="post-avatar" src="../../assets/icons/user.png" alt="avatar" />
      <MainTitle class="user-name">Vad</MainTitle>
    </div>

    <article class="post-text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, sequi.
      Consequuntur provident assumenda libero veniam.
    </article>
    <img
      class="post-img"
      src="../../assets/images/2A2A9295crop.jpg"
      alt="post image"
    />
    <MainTitle>Comments</MainTitle>
    <div class="post-comments">
      <img class="post-avatar" src="../../assets/icons/user.png" alt="avatar" />
      <textarea
        class="post-comment__content"
        placeholder="Write your comment here"
      ></textarea>
    </div>
    <div class="post-like">
      <font-awesome-icon :icon="['fal', 'thumbs-up']" style="color: #ff662d" />
      <Button class="post-comment__btn">Add comment</Button>
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue';
import MainTitle from '../MainTitle.vue';

export default {
  name: 'PostCard',
  components: {
    Button,
    MainTitle,
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
}

.post {
  padding: 15px;
  border: 2px solid #ff662d;
  border-radius: 8px;
  max-width: 60%;
  background-color: #fff;

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
    margin-bottom: 15px;
  }

  &-like {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  &-img {
    max-width: 380px;
  }

  &-comments {
    display: flex;
    justify-content: space-around;
    border: 2px solid #ff662d;
    border-radius: 8px;
    padding: 10px;
    display: flex;
  }

  &-comment__btn {
    width: 100px;
  }

  &-comment__content {
    width: 500px;
    height: 80px;
  }
}
</style>
