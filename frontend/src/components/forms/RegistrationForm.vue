<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <form @submit.prevent="signup" class="login__form">
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="text"
          placeholder="Name"
          v-model="v$.name.$model"
        />
        <span class="registration__input--error" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}</span
        >
      </div>
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="email"
          placeholder="Email"
          v-model="v$.userEmail.$model"
        />
        <span class="registration__input--error" v-if="v$.userEmail.$error">
          {{ v$.userEmail.$errors[0].$message }}</span
        >
      </div>
      <div class="registration__input--wrapper">
        <input
          class="registration__input"
          type="password"
          placeholder="Password"
          v-model="v$.password.$model"
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
          v-model="v$.confirm_password.$model"
        />
        <span
          class="registration__input--error"
          v-if="v$.confirm_password.$error"
        >
          {{ v$.confirm_password.$errors[0].$message }}</span
        >
      </div>
      <Button class="registration__btn" type="submit">Enter</Button>
      <p class="registration__have-account">
        You already have an account? Click here:
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </AuthContainer>
</template>

<script setup>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../MainTitle.vue';
import Button from '../Button.vue';

// import { useAuthStore } from '@/stores/authStore';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, sameAs, email } from '@vuelidate/validators';
import { ref } from 'vue';
import Axios from '@/api';
import router from '@/router/index';

// const authStore = useAuthStore();

const name = ref('');
const userEmail = ref('');
const password = ref('');
const confirm_password = ref('');

const rules = {
  name: { required },
  userEmail: { required, email },
  password: { required, minlength: minLength(8) },
  confirm_password: { required, sameAs: sameAs(password) },
};

const v$ = useVuelidate(rules, { name, userEmail, password, confirm_password });

// function signup() {
//   try {
//     authStore.signup(name.value, userEmail.value, password.value);
//   } catch (error) {
//     console.log(error);
//   }
// }

const signup = async () => {
  await Axios.post('api/auth/signup', {
    name: name.value,
    email: userEmail.value,
    password: password.value,
  })
    .then((res) => {
      if (res.status === 201) {
        Axios.post('api/auth/login', {
          email: userEmail.value,
          password: password.value,
        });
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem('auth', token);
        router.push('/');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// const signup = async () => {
//   try {
//     // perform signup logic, e.g. make an API request to register the user
//     const response = await Axios.post('/api/auth/signup', {
//       name: name.value,
//       email: userEmail.value,
//       password: password.value,
//     });
//     const token = response.data.token;
//     localStorage.setItem('auth', token);
//     router.push('/');
//   } catch (error) {
//     error = error.message;
//     throw error;
//   }
// };
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

  &__have-account {
    margin-top: 10px;
  }
}
</style>
