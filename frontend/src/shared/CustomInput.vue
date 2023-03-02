<template>
  <input class="custom-input" v-on="$listeners" />
</template>

<script>
export default {
  name: 'CustomInput',
};
</script>

<style lang="scss" scoped>
@import '.././assets/scss/variables.scss';

.custom-input {
  min-height: 40px;
  width: 300px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
}
</style>
