import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Registration from '../pages/Registration.vue';
import HomePage from '../pages/HomePage.vue';
// import ErrorPage from '../pages/ErrorPage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  //   { path: '*', name: 'error-page', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
