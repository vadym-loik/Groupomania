<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <form @submit.prevent="submitForm" class="login__form">
      <div class="login__input--wrapper">
        <input class="login__input" type="text" placeholder="Email" />
        <span class="login__input--error" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}</span
        >
      </div>
      <div class="login__input--wrapper">
        <input class="login__input" type="password" placeholder="Password" />
        <span class="login__input--error" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}</span
        >
      </div>
      <Button class="login__btn" type="submit">Enter</Button>
    </form>
  </AuthContainer>
</template>

<script>
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../MainTitle.vue';
import Button from '../Button.vue';
// import { useAuthStore } from '../../stores/authStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  name: 'Login',
  components: {
    Button,
    AuthContainer,
    MainTitle,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    // async submitForm() {
    //   this.v$.$validate();
    //   if (!this.v$.$error) {
    //     alert('Login was successful');
    //   } else {
    //     alert('Please fill in all fields correctly');
    //   }
    //   const auth = useAuthStore();
    //   const email = this.email;
    //   const password = this.password;
    //   await auth.login(email, password);
    //   console.log(email);
    //   console.log(password);
    // },
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minlength: minLength(8) },
    };
  },
};
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
