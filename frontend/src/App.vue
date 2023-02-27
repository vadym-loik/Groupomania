<template>
  <div id="app">
    <Button><span>Click me</span></Button>
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  name: 'app',
  components: {
    Button,
  },
};
</script>

<style scoped></style>
