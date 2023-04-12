<template>
  <div>
    <div class="comment">
      <img
        src="@/assets/icons/user.png"
        class="comment__avatar"
        alt="User avatar"
      />
      <p class="comment__text">
        {{ comment.text }}
      </p>
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
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.comment {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  &__avatar {
    margin-right: 10px;
  }

  &__text {
    border: none;
    background-color: #e6e1e1;
    border-radius: 8px;
    padding: 10px 25px 10px 10px;
  }
}
</style>
