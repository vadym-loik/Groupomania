<template>
  <div id="app">
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

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
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
