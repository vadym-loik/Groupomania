<template>
  <div>
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Roboto Mono', monospace;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 100%;
  height: auto;
}

.content {
  flex-grow: 1;
}
</style>
