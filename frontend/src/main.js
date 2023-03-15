import './assets/scss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './axios';

createApp(App).use(router).use(createPinia()).mount('#app');
