<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form class="registration__form">
      <CustomInput
        v-model="formData.name"
        name="name"
        placeholder="Name"
        autocomplete="username"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="E-mail"
        autocomplete="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="Password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="Confirm password"
        :rules="confirmPassword"
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
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../utils/validationRules';

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
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: 'Passwords do not match',
        }),
      ];
    },
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
