<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form class="registration__form">
      <CustomInput
        v-model="formData.name"
        name="name"
        placeholder="Name"
        autocomplete="username"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="E-mail"
        autocomplete="email"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="Password"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="Confirm password"
        class="registration__input"
      />
      <Button class="registration__btn" type="submit">Enter</Button>
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
  name: 'Registration',
  components: {
    AuthContainer,
    MainTitle,
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
