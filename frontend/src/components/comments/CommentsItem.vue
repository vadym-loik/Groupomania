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
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
console.log(props);
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
</style>
