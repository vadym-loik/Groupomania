<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form>
      <CustomInput />
      <CustomInput />
      <Button>Enter</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle.vue';
import Form from '../../shared/form/index.vue';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../Button.vue';
// import {
//   emailValidation,
//   passwordValidation,
//   isRequired,
// } from '../../../utils/validationRules';

export default {
  name: 'Login',
  components: {
    AuthContainer,
    MainTitle,
    Form,
    CustomInput,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
