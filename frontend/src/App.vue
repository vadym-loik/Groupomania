<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <Container>
        <Button>Enter</Button>
        <CustomInput></CustomInput>
      </Container>
    </div>
    <Footer></Footer>
  </div>
  <router-view></router-view>
</template>

<script>
import Button from './components/Button.vue';
import CustomInput from './shared/CustomInput.vue';
import Footer from './shared/Footer.vue';
import Container from './shared/Container.vue';
import Header from './shared/Header.vue';

export default {
  name: 'app',
  components: {
    Container,
    Button,
    CustomInput,
    Footer,
    Header,
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
  padding-top: 120px;
}
</style>
