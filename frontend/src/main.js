import { createApp } from 'vue';
import './assets/scss/index.scss';
import './axios';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');
