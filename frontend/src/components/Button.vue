<template>
  <button v-bind="$attrs" class="btn" v-bind:type="type">
    <slot>Enter</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.btn {
  width: 100%;
  height: 40px;

  cursor: pointer;
  border-radius: 8px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;

  color: #fff;
  background: $main-color;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
}
</style>
