import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import HomePage from '../pages/HomePage.vue';
// import ErrorPage from '../pages/ErrorPage.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/', name: 'homepage', component: HomePage },
  //   { path: '*', name: 'error-page', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
