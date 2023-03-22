<template>
  <Container>
    <SectionSpacer />
    <div>
      <button @click="getUser.handleUser">Get user</button>
      <div v-if="getUser.name">{{ getUser.name }}</div>
      <div v-if="getUser.email">{{ getUser.email }}</div>
    </div>
  </Container>
</template>

<script setup>
import SectionSpacer from '../components/SectionWithHeaderSpacer.vue';
import Container from '../components/Container.vue';
</script>

<style lang="scss" scoped></style>
