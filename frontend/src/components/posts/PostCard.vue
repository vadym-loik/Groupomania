<template>
  <div class="post">
    <img
      class="post__avatar"
      src="../../assets/images/IMG_20150915_153914.jpg"
      alt="avatar"
    />
    <article class="post__text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, sequi.
      Consequuntur provident assumenda libero veniam.
    </article>
    <img
      class="post__img"
      src="../../assets/images/2A2A9295crop.jpg"
      alt="post image"
    />
    <MainTitle>Comments</MainTitle>
    <div class="post__comments">
      <img
        class="post__avatar"
        src="../../assets/images/IMG_20150915_153914.jpg"
        alt="avatar"
      />
      <p class="post__comments--text">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="post__like">
      <font-awesome-icon :icon="['fal', 'thumbs-up']" style="color: #ff662d" />
      <Button class="post__comment--btn">Add comment</Button>
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
.post {
  padding: 15px;
  border: 2px solid #ff662d;
  border-radius: 8px;
  max-width: 60%;
  background-color: #fff;

  &__avatar {
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  &__avatar,
  &__text,
  &__img,
  &__comments {
    margin-bottom: 15px;
  }

  &__like {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 300px;
  }

  &__comments {
    border: 2px solid #ff662d;
    border-radius: 8px;
    padding: 10px;
    display: flex;
  }

  &__comment--btn {
    width: 100px;
  }
}
</style>
