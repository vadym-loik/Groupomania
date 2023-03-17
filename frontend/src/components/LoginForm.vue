<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" class="login__form">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        class="login__input"
      />
      <Button class="login__btn" type="submit" :loading="loading">Enter</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import AuthContainer from './AuthContainer.vue';
import MainTitle from './MainTitle.vue';
import Form from './Form.vue';
import CustomInput from './CustomInput.vue';
import Button from './Button.vue';

export default {
  name: 'Login',
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    width: 100%;
    margin-top: 15px;
  }
}
</style>
