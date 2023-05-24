<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <form @submit.prevent="login" class="login__form">
      <div class="login__input--wrapper">
        <input
          class="login__input"
          autocomplete="email"
          name="email"
          type="email"
          placeholder="Email"
          v-model.trim="v$.userEmail.$model"
          @keyup.stop.prevent="cleanError"
        />
        <p v-if="authStore.emailError?.length > 0" class="error-message">
          {{ authStore.emailError }}
        </p>
        <span
          for="email"
          class="login__input--error"
          v-if="v$.userEmail.$error"
        >
          {{ v$.userEmail.$errors[0].$message }}</span
        >
      </div>
      <div class="login__input--wrapper">
        <input
          class="login__input"
          name="password"
          type="password"
          placeholder="Password"
          v-model.trim="v$.password.$model"
          @keyup.stop.prevent="cleanError"
        />
        <p v-if="authStore.passwordError?.length > 0" class="error-message">
          {{ authStore.passwordError }}
        </p>
        <span
          for="password"
          class="login__input--error"
          v-if="v$.password.$error"
        >
          {{ v$.password.$errors[0].$message }}</span
        >
      </div>
      <Button class="login__btn" type="submit">Enter</Button>
    </form>
  </AuthContainer>
</template>

<script setup>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../MainTitle.vue';
import Button from '../Button.vue';

import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const userEmail = ref('');
const password = ref('');

const rules = {
  userEmail: { required, email },
  password: { required, minlength: minLength(8) },
};

const v$ = useVuelidate(rules, { userEmail, password });

function cleanError() {
  authStore.emailError = '';
  authStore.passwordError = '';
}

async function login() {
  await authStore.login(userEmail.value, password.value);
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-size: 20px;
  }

  &__input {
    height: 40px;
    width: 100%;
    border: 2px solid $main-color;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;

    &::placeholder {
      color: inherit;
    }
  }

  .error-message {
    color: red;
  }

  &__btn {
    width: 100%;
    margin-top: 15px;
    font-size: 14px;
  }

  &__input--wrapper {
    margin-bottom: 20px;
  }

  &__input--error {
    color: red;
  }

  @media (min-width: 768px) {
    &__title {
      font-size: 26px;
    }

    &__input,
    &__btn {
      font-size: 22px;
    }
  }
}
</style>
