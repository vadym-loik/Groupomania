<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <form @submit.prevent="login" class="login__form">
      <div class="login__input--wrapper">
        <input
          class="login__input"
          type="email"
          placeholder="Email"
          v-model="v$.userEmail.$model"
        />
        <span class="login__input--error" v-if="v$.userEmail.$error">
          {{ v$.userEmail.$errors[0].$message }}</span
        >
      </div>
      <div class="login__input--wrapper">
        <input
          class="login__input"
          type="password"
          placeholder="Password"
          v-model="v$.password.$model"
        />
        <span class="login__input--error" v-if="v$.password.$error">
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
import { useAuthStore } from '@/stores/authStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { ref } from 'vue';

const authStore = useAuthStore();

const userEmail = ref('');
const password = ref('');

const rules = {
  userEmail: { required, email },
  password: { required, minlength: minLength(8) },
};

const v$ = useVuelidate(rules, { userEmail, password });

function login() {
  try {
    authStore.login(userEmail.value, password.value);
  } catch (error) {
    console.log(error);
  }
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
