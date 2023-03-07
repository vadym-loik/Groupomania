<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form class="login__form">
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="E-mail"
        autocomplete="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="Password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button class="login__btn" type="submit">Enter</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle.vue';
import Form from '../../shared/form/index.vue';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../Button.vue';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../../utils/validationRules';

export default {
  name: 'Login',
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
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
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
