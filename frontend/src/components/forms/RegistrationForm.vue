<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <form @submit.prevent="submitForm" class="login__form">
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="text"
          placeholder="Email"
          v-model="store.email"
        />
        <span class="registration__input--error" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}</span
        >
      </div>
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="password"
          placeholder="Password"
          v-model="store.password"
        />
        <span class="registration__input--error" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}</span
        >
      </div>
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="password"
          placeholder="Confirm password"
          v-model="store.confirm_password"
        />
        <span
          class="registration__input--error"
          v-if="v$.confirm_password.$error"
        >
          {{ v$.confirm_password.$errors[0].$message }}</span
        >
      </div>
      <Button class="registration__btn" type="submit">Enter</Button>
    </form>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../MainTitle.vue';
import Button from '../Button.vue';

import { useRegistrationStore } from '../../stores/registerStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

export default {
  name: 'Registration',
  components: {
    AuthContainer,
    MainTitle,
    Button,
  },
  setup() {
    const store = useRegistrationStore();

    return {
      v$: useVuelidate(),
      store,
    };
  },
  data() {
    return {
      email: '',
      password: '',
      confirm_password: '',
    };
  },
  methods: {
    async submitForm() {
      await this.store.submitForm();
    },
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minlength: minLength(8) },
      confirm_password: { required, sameAs: sameAs(this.password) },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.registration {
  &__title {
    text-align: center;
  }

  &__input {
    height: 40px;
    width: 100%;
    border: 2px solid $main-color;
    border-radius: 8px;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;

    &::placeholder {
      color: inherit;
    }
  }

  &__btn {
    width: 100%;
    margin-top: 15px;
  }

  &__input--wrapper {
    margin-bottom: 20px;
  }

  &__input--error {
    color: red;
  }
}
</style>
